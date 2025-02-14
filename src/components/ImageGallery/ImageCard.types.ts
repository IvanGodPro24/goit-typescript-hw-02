export type ImageCardProps = {
  card: string;
  description: string;
  likes: number;
  onClick: (image: { card: string; description: string }) => void;
};
