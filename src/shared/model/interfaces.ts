export interface LinkProps {
  path: string;
  content: string;
  handleClick?: () => void;
}

export interface ClickableProps {
  handleClick: () => void;
}
