type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type ExploreHeaderProps = {
  onCategoryChanged: (category: string) => void;
};

type ListingsProps = {
  listings: any[];
  refresh: number;
  category: string;
};

export { Post, ExploreHeaderProps, ListingsProps };
