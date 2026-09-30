import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "@remix-run/react";
import { v4 as uuid } from "uuid";
import cx from "classix";
import { FiChevronLeft, FiChevronRight, FiUploadCloud, FiFile, FiTrash2 } from "react-icons/fi";
import { HiOutlineCheckCircle, HiOutlineExclamationCircle } from "react-icons/hi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import * as Checkbox from "@radix-ui/react-checkbox";
import { BsCheckLg } from "react-icons/bs";
import * as Select from "@app/components/select";
import { Button } from "@app/components/button";
import {
  RegistrationStepId,
  RegistrationValues,
  registrationSteps,
  registrationStepDict,
  defaultRegistrationValues,
  validateAccountStep,
  validateDetailsStep,
  isStepValid,
  passwordRequirements,
  countries,
  UploadedFile,
  isAllowedFileType,
  isAllowedFileSize,
  ALLOWED_FILE_TYPES_LABEL,
  MAX_FILE_SIZE_BYTES,
  formatFileSize,
  mockRegistrationApi,
} from "@domain/registration";

const DRAFT_STORAGE_KEY = "registration-draft";

export const RegisterView = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [values, setValues] = useState<RegistrationValues>(defaultRegistrationValues);
  const [visitedSteps, setVisitedSteps] = useState<RegistrationStepId[]>(["account"]);
  const [submitError, setSubmitError] = useState<string | undefined>(undefined);
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [restoredNotice, setRestoredNotice] = useState(false);

  const stepParam = searchParams.get("step");
  const currentStep: RegistrationStepId = registrationSteps.includes(
    stepParam as RegistrationStepId
  )
    ? (stepParam as RegistrationStepId)
    : "account";
  const currentStepIndex = registrationSteps.indexOf(currentStep);

  useEffect(() => {
    const raw = window.localStorage.getItem(DRAFT_STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Partial<RegistrationValues>;
        setValues((prev) => ({
          ...prev,
          details: parsed.details || prev.details,
          account: { ...prev.account, email: parsed.account?.email || "" },
        }));
        setRestoredNotice(true);
      } catch {
        // ignore malformed draft
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const draft = {
      account: { email: values.account.email },
      details: values.details,
    };
    window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
  }, [values.account.email, values.details]);

  const goToStep = useCallback(
    (stepId: RegistrationStepId) => {
      setVisitedSteps((prev) => (prev.includes(stepId) ? prev : [...prev, stepId]));
      setSearchParams({ step: stepId });
    },
    [setSearchParams]
  );

  const startOver = () => {
    window.localStorage.removeItem(DRAFT_STORAGE_KEY);
    setValues(defaultRegistrationValues);
    setRestoredNotice(false);
    goToStep("account");
  };

  const handleNext = () => {
    if (!isStepValid(currentStep, values)) return;
    const nextStep = registrationSteps[currentStepIndex + 1];
    if (nextStep) goToStep(nextStep);
  };

  const handleBack = () => {
    const previousStep = registrationSteps[currentStepIndex - 1];
    if (previousStep) goToStep(previousStep);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(undefined);
    setEmailError(undefined);

    const result = await mockRegistrationApi.submit(values);

    setIsSubmitting(false);

    if (result.success) {
      window.localStorage.removeItem(DRAFT_STORAGE_KEY);
      setIsSubmitted(true);
      return;
    }

    if (result.fieldErrors?.email) {
      setEmailError(result.fieldErrors.email);
      goToStep("account");
      return;
    }

    setSubmitError(result.generalError || "Something went wrong. Please try again.");
  };

  if (isSubmitted) {
    return <RegistrationSuccess email={values.account.email} />;
  }

  return (
    <div className="mx-auto max-w-[560px] py-10">
      <h1 className="font-primary-black text-3xl text-font">Create your account</h1>
      <WizardProgress currentStepIndex={currentStepIndex} />

      {restoredNotice && (
        <div className="mt-4 flex items-center justify-between rounded bg-background-info px-3 py-2 text-sm text-font-info">
          <span>We restored your in-progress registration.</span>
          <button
            type="button"
            onClick={startOver}
            className="font-primary-bold underline"
            aria-label="Start over"
          >
            Start over
          </button>
        </div>
      )}

      <div className="mt-8" role="region" aria-live="polite">
        <h2 className="font-primary-bold text-lg text-font">
          {registrationStepDict[currentStep]}
        </h2>

        {currentStep === "account" && (
          <AccountStep
            values={values.account}
            emailError={emailError}
            onChange={(account) => setValues((prev) => ({ ...prev, account }))}
          />
        )}
        {currentStep === "details" && (
          <DetailsStep
            values={values.details}
            onChange={(details) => setValues((prev) => ({ ...prev, details }))}
          />
        )}
        {currentStep === "documents" && (
          <DocumentsStep
            files={values.documents}
            onChange={(documents) => setValues((prev) => ({ ...prev, documents }))}
          />
        )}
        {currentStep === "review" && (
          <ReviewStep
            values={values}
            visitedSteps={visitedSteps}
            onEditStep={goToStep}
            onAcceptedTermsChange={(acceptedTerms) =>
              setValues((prev) => ({ ...prev, acceptedTerms }))
            }
          />
        )}

        {submitError && (
          <div className="mt-4 flex items-center gap-2 rounded bg-background-danger px-3 py-2 text-sm text-font-danger">
            <HiOutlineExclamationCircle size={18} />
            <span>{submitError}</span>
          </div>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <Button
          type="button"
          color="neutral"
          variant="text"
          onClick={handleBack}
          disabled={currentStepIndex === 0}
          aria-label="Go back"
        >
          <FiChevronLeft size={18} />
          Back
        </Button>

        {currentStep === "review" ? (
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={!isStepValid("review", values) || isSubmitting}
            aria-label="Submit registration"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleNext}
            disabled={!isStepValid(currentStep, values)}
            aria-label="Go to next step"
          >
            Next
            <FiChevronRight size={18} />
          </Button>
        )}
      </div>
    </div>
  );
};

const WizardProgress = ({ currentStepIndex }: { currentStepIndex: number }): JSX.Element => (
  <div className="mt-6">
    <p className="font-primary-light text-xs uppercase text-font-subtlest sm:hidden">
      Step {currentStepIndex + 1} of {registrationSteps.length}
    </p>
    <div className="mt-2 hidden gap-2 sm:flex">
      {registrationSteps.map((stepId, index) => (
        <div key={stepId} className="flex-1">
          <div
            className={cx(
              "h-1.5 rounded-full",
              index <= currentStepIndex ? "bg-background-brand-bold" : "bg-background-neutral"
            )}
          />
          <p
            className={cx(
              "mt-1 font-primary-light text-2xs uppercase",
              index === currentStepIndex ? "text-font-brand" : "text-font-subtlest"
            )}
          >
            {registrationStepDict[stepId]}
          </p>
        </div>
      ))}
    </div>
    <div className="mt-2 flex gap-2 sm:hidden">
      {registrationSteps.map((stepId, index) => (
        <div
          key={stepId}
          className={cx(
            "h-1.5 flex-1 rounded-full",
            index <= currentStepIndex ? "bg-background-brand-bold" : "bg-background-neutral"
          )}
        />
      ))}
    </div>
  </div>
);

const fieldClass = (hasError?: boolean) =>
  cx(
    "mt-1 w-full rounded-md border-none bg-background-input px-3 py-2 text-font outline outline-2 outline-border-input placeholder:text-font-subtlest hover:bg-background-input-hovered focus:bg-background-input-pressed focus:outline-border-brand",
    hasError && "!outline-border-danger"
  );

const FieldError = ({ message }: { message?: string }): JSX.Element | null => {
  if (!message) return null;
  return <p className="mt-1 text-xs text-font-danger">{message}</p>;
};

const AccountStep = ({
  values,
  emailError,
  onChange,
}: {
  values: RegistrationValues["account"];
  emailError?: string;
  onChange: (values: RegistrationValues["account"]) => void;
}): JSX.Element => {
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const errors = validateAccountStep(values);
  const markTouched = (field: string) => setTouched((prev) => ({ ...prev, [field]: true }));

  return (
    <div className="mt-4 space-y-4">
      <div>
        <label htmlFor="email" className="font-primary text-sm text-font">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoFocus
          value={values.email}
          onChange={(e) => onChange({ ...values, email: e.target.value })}
          onBlur={() => markTouched("email")}
          placeholder="you@example.com"
          className={fieldClass(Boolean(touched.email && errors.email) || Boolean(emailError))}
        />
        <FieldError message={(touched.email && errors.email) || emailError} />
      </div>
      <div>
        <label htmlFor="password" className="font-primary text-sm text-font">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={values.password}
          onChange={(e) => onChange({ ...values, password: e.target.value })}
          onBlur={() => markTouched("password")}
          placeholder="Create a password"
          className={fieldClass(Boolean(touched.password && errors.password))}
        />
        <ul className="mt-2 space-y-1">
          {passwordRequirements.map((req) => {
            const met = req.test(values.password);
            return (
              <li
                key={req.label}
                className={cx(
                  "flex items-center gap-1.5 text-xs",
                  met ? "text-font-success" : "text-font-subtlest"
                )}
              >
                <AiOutlineCheckCircle size={14} />
                {req.label}
              </li>
            );
          })}
        </ul>
        <FieldError message={touched.password ? errors.password : undefined} />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="font-primary text-sm text-font">
          Confirm password
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={(e) => onChange({ ...values, confirmPassword: e.target.value })}
          onBlur={() => markTouched("confirmPassword")}
          placeholder="Re-enter your password"
          className={fieldClass(Boolean(touched.confirmPassword && errors.confirmPassword))}
        />
        <FieldError message={touched.confirmPassword ? errors.confirmPassword : undefined} />
      </div>
    </div>
  );
};

const DetailsStep = ({
  values,
  onChange,
}: {
  values: RegistrationValues["details"];
  onChange: (values: RegistrationValues["details"]) => void;
}): JSX.Element => {
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const errors = validateDetailsStep(values);
  const markTouched = (field: string) => setTouched((prev) => ({ ...prev, [field]: true }));

  return (
    <div className="mt-4 space-y-4">
      <div>
        <label htmlFor="fullName" className="font-primary text-sm text-font">
          Full name
        </label>
        <input
          id="fullName"
          autoFocus
          value={values.fullName}
          onChange={(e) => onChange({ ...values, fullName: e.target.value })}
          onBlur={() => markTouched("fullName")}
          placeholder="Jane Doe"
          className={fieldClass(Boolean(touched.fullName && errors.fullName))}
        />
        <FieldError message={touched.fullName ? errors.fullName : undefined} />
      </div>
      <div>
        <label htmlFor="phone" className="font-primary text-sm text-font">
          Phone number
        </label>
        <input
          id="phone"
          value={values.phone}
          onChange={(e) => onChange({ ...values, phone: e.target.value })}
          onBlur={() => markTouched("phone")}
          placeholder="+1 555 123 4567"
          className={fieldClass(Boolean(touched.phone && errors.phone))}
        />
        <FieldError message={touched.phone ? errors.phone : undefined} />
      </div>
      <div>
        <label htmlFor="dateOfBirth" className="font-primary text-sm text-font">
          Date of birth
        </label>
        <input
          id="dateOfBirth"
          type="date"
          value={values.dateOfBirth}
          onChange={(e) => onChange({ ...values, dateOfBirth: e.target.value })}
          onBlur={() => markTouched("dateOfBirth")}
          className={fieldClass(Boolean(touched.dateOfBirth && errors.dateOfBirth))}
        />
        <FieldError message={touched.dateOfBirth ? errors.dateOfBirth : undefined} />
      </div>
      <div>
        <p className="font-primary text-sm text-font">Country</p>
        <Select.Root
          name="country"
          value={values.country || undefined}
          onValueChange={(value) => onChange({ ...values, country: value })}
        >
          <Select.Trigger
            aria-label="Open country select"
            className="mt-1 flex w-full justify-between"
          >
            <Select.Value placeholder="Select your country" />
            <Select.TriggerIcon />
          </Select.Trigger>
          <Select.Content>
            <Select.ScrollUpButton />
            <Select.Viewport>
              {countries.map((country) => (
                <Select.Item key={country} value={country}>
                  <Select.ItemIndicator />
                  <Select.ItemText>{country}</Select.ItemText>
                </Select.Item>
              ))}
              <Select.Separator />
            </Select.Viewport>
            <Select.ScrollDownButton />
          </Select.Content>
        </Select.Root>
        <FieldError message={touched.country ? errors.country : undefined} />
      </div>
    </div>
  );
};

const DocumentsStep = ({
  files,
  onChange,
}: {
  files: UploadedFile[];
  onChange: (files: UploadedFile[]) => void;
}): JSX.Element => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const addFiles = (fileList: FileList | null) => {
    if (!fileList) return;

    const newFiles: UploadedFile[] = Array.from(fileList).map((file) => {
      const isValidType = isAllowedFileType(file);
      const isValidSize = isAllowedFileSize(file);
      const error = !isValidType
        ? `Only ${ALLOWED_FILE_TYPES_LABEL} files are allowed`
        : !isValidSize
        ? `File is larger than ${formatFileSize(MAX_FILE_SIZE_BYTES)}`
        : undefined;

      return {
        id: uuid(),
        name: file.name,
        size: file.size,
        type: file.type,
        progress: error ? 0 : 0,
        status: error ? "error" : "uploading",
        error,
      };
    });

    onChange([...files, ...newFiles]);

    newFiles
      .filter((file) => file.status === "uploading")
      .forEach((file) => {
        mockRegistrationApi.uploadFile((progress) => {
          onChange(
            files
              .concat(newFiles)
              .map((f) =>
                f.id === file.id
                  ? { ...f, progress, status: progress === 100 ? "done" : "uploading" }
                  : f
              )
          );
        });
      });
  };

  const removeFile = (id: string) => onChange(files.filter((file) => file.id !== id));

  return (
    <div className="mt-4">
      <p className="mb-3 text-sm text-font-subtlest">
        Upload identity or supporting documents. This step is optional — you can
        finish it later.
      </p>
      <label
        htmlFor="file-upload"
        onDragOver={(e) => {
          e.preventDefault();
          setIsDraggingOver(true);
        }}
        onDragLeave={() => setIsDraggingOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDraggingOver(false);
          addFiles(e.dataTransfer.files);
        }}
        className={cx(
          "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed p-8 text-center",
          isDraggingOver
            ? "border-border-brand bg-background-brand-subtlest"
            : "border-border-input bg-background-input"
        )}
      >
        <FiUploadCloud size={28} className="text-icon-subtle" />
        <span className="font-primary-bold text-sm text-font">
          Drag files here or click to browse
        </span>
        <span className="text-xs text-font-subtlest">
          {ALLOWED_FILE_TYPES_LABEL} · up to {formatFileSize(MAX_FILE_SIZE_BYTES)}
        </span>
        <input
          id="file-upload"
          type="file"
          multiple
          accept="application/pdf,image/png,image/jpeg"
          className="hidden"
          onChange={(e) => addFiles(e.target.files)}
        />
      </label>

      {files.length > 0 && (
        <ul className="mt-4 space-y-2">
          {files.map((file) => (
            <li
              key={file.id}
              className="flex items-center gap-3 rounded bg-elevation-surface-raised p-3"
            >
              <FiFile size={20} className="text-icon-subtle" />
              <div className="flex-1">
                <p className="text-sm text-font">{file.name}</p>
                {file.status === "error" ? (
                  <p className="text-xs text-font-danger">{file.error}</p>
                ) : file.status === "done" ? (
                  <p className="flex items-center gap-1 text-xs text-font-success">
                    <HiOutlineCheckCircle size={14} /> Uploaded ·{" "}
                    {formatFileSize(file.size)}
                  </p>
                ) : (
                  <div className="mt-1 h-1.5 w-full rounded-full bg-background-neutral">
                    <div
                      className="h-1.5 rounded-full bg-background-brand-bold transition-all"
                      style={{ width: `${file.progress}%` }}
                    />
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => removeFile(file.id)}
                aria-label={`Remove ${file.name}`}
                className="rounded p-1.5 text-icon-subtle hover:bg-background-danger hover:text-icon-danger"
              >
                <FiTrash2 size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ReviewStep = ({
  values,
  visitedSteps,
  onEditStep,
  onAcceptedTermsChange,
}: {
  values: RegistrationValues;
  visitedSteps: RegistrationStepId[];
  onEditStep: (stepId: RegistrationStepId) => void;
  onAcceptedTermsChange: (accepted: boolean) => void;
}): JSX.Element => (
  <div className="mt-4 space-y-6">
    <ReviewSection title="Account" onEdit={() => onEditStep("account")}>
      <p>{values.account.email}</p>
    </ReviewSection>
    <ReviewSection title="Your details" onEdit={() => onEditStep("details")}>
      <p>{values.details.fullName}</p>
      <p>{values.details.phone}</p>
      <p>{values.details.country}</p>
      <p>{values.details.dateOfBirth}</p>
    </ReviewSection>
    <ReviewSection title="Documents" onEdit={() => onEditStep("documents")}>
      {values.documents.length === 0 ? (
        <p className="text-font-subtlest">No documents uploaded</p>
      ) : (
        values.documents.map((file) => <p key={file.id}>{file.name}</p>)
      )}
    </ReviewSection>

    <label className="flex items-start gap-3">
      <Checkbox.Root
        id="acceptedTerms"
        className="mt-0.5 h-5 w-5 shrink-0 rounded bg-background-input outline outline-2 outline-border-input"
        checked={values.acceptedTerms}
        onCheckedChange={(checked) => onAcceptedTermsChange(Boolean(checked))}
      >
        <Checkbox.Indicator className="flex h-5 w-5 items-center justify-center rounded bg-background-brand-bold">
          <BsCheckLg size={12} className="text-font-inverse" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <span className="text-sm text-font">
        I agree to the terms of service and privacy policy.
      </span>
    </label>
    {visitedSteps.length < registrationSteps.length - 1 && (
      <p className="text-xs text-font-subtlest">
        You can jump back to any step you&apos;ve already visited using its Edit link.
      </p>
    )}
  </div>
);

const ReviewSection = ({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}): JSX.Element => (
  <div className="rounded bg-elevation-surface-raised p-4">
    <div className="flex items-center justify-between">
      <p className="font-primary-bold text-sm text-font">{title}</p>
      <button
        type="button"
        onClick={onEdit}
        className="text-xs text-font-brand hover:underline"
        aria-label={`Edit ${title}`}
      >
        Edit
      </button>
    </div>
    <div className="mt-2 space-y-0.5 text-sm text-font-subtle">{children}</div>
  </div>
);

const RegistrationSuccess = ({ email }: { email: string }): JSX.Element => (
  <div className="mx-auto flex max-w-[480px] flex-col items-center py-20 text-center">
    <HiOutlineCheckCircle size={56} className="text-icon-accent-green" />
    <h1 className="mt-4 font-primary-black text-2xl text-font">
      You&apos;re all set!
    </h1>
    <p className="mt-2 text-sm text-font-subtle">
      We&apos;ve sent a confirmation to <strong>{email}</strong>. Check your inbox
      to verify your account before signing in.
    </p>
  </div>
);
