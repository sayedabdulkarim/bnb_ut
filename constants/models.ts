type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type ExploreHeaderProps = {
  onCategoryChanged: (category: string) => void;
};

export { Post, ExploreHeaderProps };
