export interface LinkProps {
  path: string;
  content: string;
  handleClick?: () => void;
  isAnchor?: boolean;
  className?: string;
}

export interface ClickableProps {
  handleClick: () => void;
}
