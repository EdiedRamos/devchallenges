import { ArticleList, Separator, Title } from "./(components)";

export default function SimpleArticleListing() {
  return (
    <section className="min-h-screen bg-sal-white">
      <Title />
      <Separator />
      <ArticleList />
    </section>
  );
}
