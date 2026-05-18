import MarkdownPage from '../components/MarkdownPage';
import content from '../content/comandos.md?raw';

export default function Comandos() {
  return <MarkdownPage content={content} />;
}
