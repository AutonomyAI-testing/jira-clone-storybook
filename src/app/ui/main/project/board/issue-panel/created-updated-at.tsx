import { Issue } from "@domain/issue";
import { formatDateTime } from "@utils/formatDateTime";

export const CreatedUpdatedAt = ({ issue }: Props): JSX.Element | null => {
  // The create screen renders the panel with no issue at all, so there is
  // nothing to describe and the block is left out entirely.
  if (!issue) return null;

  const values = [
    { label: "Created at:", value: issue.createdAt },
    { label: "Updated at:", value: issue.updatedAt },
  ];

  return (
    <div>
      <table>
        <tbody className="text-xs text-font-subtlest">
          {values.map(({ label, value }) => (
            <tr key={label}>
              <td className="pr-4">
                <p className="mb-2">{label}</p>
              </td>
              <td>
                <p className="mb-2">{formatDateTime(value)}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface Props {
  issue?: Issue;
}
