import type { ChangeEvent } from "react";
import cx from "classix";
import { BsCheckLg } from "react-icons/bs";
import { Topic } from "@domain/topic";
import { MIN_INTERESTS } from "@domain/user";
import { RegisterStepProps } from "./register.constants";
import { StepHeading } from "./register-fields";

export const StepFocus = ({
  form,
  errors,
  onChange,
  topics,
}: Props): JSX.Element => {
  const handleTopic = (e: ChangeEvent<HTMLInputElement>): void => {
    const topicId = e.target.value;

    onChange({
      interests: e.target.checked
        ? [...form.interests, topicId]
        : form.interests.filter((id) => id !== topicId),
    });
  };

  return (
    <>
      <StepHeading
        step={3}
        title="What do you work on?"
        description={`Pick at least ${MIN_INTERESTS} areas so we can put the right issues and projects in front of you.`}
      />

      {topics.length === 0 ? (
        <p className="rounded p-4 font-primary-light text-sm text-font-subtlest outline outline-2 outline-border-input">
          No focus areas have been set up yet. You can skip this step for now.
        </p>
      ) : (
        <fieldset>
          <legend className="sr-only">Focus areas</legend>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {topics.map((topic) => {
              const isSelected = form.interests.includes(topic.id);

              return (
                <label key={topic.id} className="cursor-pointer">
                  <input
                    type="checkbox"
                    name="interests"
                    value={topic.id}
                    checked={isSelected}
                    onChange={handleTopic}
                    className="peer sr-only"
                  />
                  <span
                    className={cx(
                      "flex items-center gap-2 rounded px-3 py-2.5 outline outline-2 duration-100 ease-in-out",
                      "peer-focus-visible:outline-border-brand",
                      isSelected
                        ? "bg-background-selected outline-border-selected"
                        : "bg-background-input outline-border-input hover:bg-background-input-hovered"
                    )}
                  >
                    <span className="font-primary-bold text-sm text-font">
                      {topic.name}
                    </span>
                    <BsCheckLg
                      size={14}
                      className={cx(
                        "ml-auto",
                        isSelected ? "text-icon-selected" : "text-transparent"
                      )}
                    />
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      <p
        className={cx(
          "mt-3 font-primary-light text-xs",
          errors.interests ? "text-font-danger" : "text-font-subtlest"
        )}
      >
        {errors.interests ??
          `${form.interests.length} of ${topics.length} selected`}
      </p>
    </>
  );
};

type Props = RegisterStepProps & {
  topics: Topic[];
};
