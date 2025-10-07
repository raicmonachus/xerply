export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  defaultActive?: number;
  onYearChange?: (index: number, year: string) => void;
  className?: string;
  contentPosition?: 'left' | 'right';
  animated?: boolean;
}
