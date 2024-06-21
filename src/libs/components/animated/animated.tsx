import {
  AnimatedContent,
  AnimatedHighlightedText,
  AnimatedImage,
  AnimatedText,
  AnimatedTitle,
} from "./libs/components/components";

const Animated: React.FC & {
  Content: typeof AnimatedContent;
  HighlightedText: typeof AnimatedHighlightedText;
  Image: typeof AnimatedImage;
  Text: typeof AnimatedText;
  Title: typeof AnimatedTitle;
} = () => {
  return <></>;
};

Animated.Content = AnimatedContent;
Animated.HighlightedText = AnimatedHighlightedText;
Animated.Image = AnimatedImage;
Animated.Text = AnimatedText;
Animated.Title = AnimatedTitle;

export { Animated };
