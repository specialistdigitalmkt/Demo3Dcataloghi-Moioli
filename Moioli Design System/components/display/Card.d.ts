/**
 * @startingPoint section="Display" subtitle="Card with eyebrow, title and hover shadow" viewport="700x220"
 */
export interface CardProps {
  eyebrow?: string;
  title?: string;
  /** Enable the hover shadow lift (default true) */
  hover?: boolean;
  children?: React.ReactNode;
}
