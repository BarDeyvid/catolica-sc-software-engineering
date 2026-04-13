import MarkdownPage from '../components/MarkdownPage';
import content from '../content/readme.md?raw';

export default function Readme() {
  return <MarkdownPage content={content} />;
}
