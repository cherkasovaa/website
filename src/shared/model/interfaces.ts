export interface LinkProps {
  path: string;
  content: string;
  handleClick?: () => void;
  isAnchor?: boolean;
}

export interface ClickableProps {
  handleClick: () => void;
}
