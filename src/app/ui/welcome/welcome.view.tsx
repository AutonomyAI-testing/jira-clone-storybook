import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import { User, usersMock } from "@domain/user";

const teamMembers: User[] = usersMock.filter((user) => user.image).slice(0, 8);

export const WelcomeView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full flex-col bg-elevation-surface">
      <header className="flex w-full items-center gap-2 border-border bg-elevation-surface-raised px-5 py-3 shadow-sm">
        <img src="/images/logo.png" width={24} height={24} alt="Jira Clone" />
        <span className="font-primary-bold text-font">Jira Clone</span>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-5 py-12">
        <div className="flex w-full max-w-[600px] flex-col items-center text-center">
          <img
            src="/images/default-project.png"
            width={120}
            height={120}
            alt="Jira Clone mascot"
            className="mb-8 w-[120px] rounded-full shadow-sm"
          />

          <h1 className="mb-4 font-primary-black text-5xl leading-none text-red-500">
            Welcome
          </h1>

          <p className="mb-8 font-primary-light text-lg text-font-subtle">
            Your projects, issues and teammates in one place. Jump back in to
            plan, track and ship work with your team.
          </p>

          <Button color="primary" variant="contained" size="lg">
            Go to projects
          </Button>
        </div>

        <section className="mt-12 flex w-full max-w-[500px] flex-col items-center">
          <p className="mb-6 font-primary-bold text-2xs text-font-subtlest">
            YOUR TEAM
          </p>
          <div className="grid grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center gap-2"
              >
                <UserAvatar
                  name={member.name}
                  image={member.image}
                  color={member.color}
                  size={56}
                />
                <span className="font-primary text-xs text-font-subtle">
                  {member.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
