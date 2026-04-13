import MarkdownPage from '../components/MarkdownPage';
import content from '../content/tutorial.md?raw';

export default function Tutorial() {
  return <MarkdownPage content={content} />;
}
