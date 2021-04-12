export type SearchButtonProps = {
  text?: string;
};

export const SearchButton: React.FC<SearchButtonProps> = () => (
  <button className="search">Search</button>
);
