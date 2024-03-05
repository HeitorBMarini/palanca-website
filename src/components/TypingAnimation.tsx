import React from 'react';

interface TypingAnimationProps {
  text: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text }) => {
  // Dividir o texto por \\n e renderizar com quebras de linha
  const renderAnimatedText = (text: string) => {
    return text.split('\\n').map((line, indexLine, array) => (
      <React.Fragment key={indexLine}>
        {line.split('').map((letter, indexLetter) => (
          <span key={indexLetter} style={{ animationDelay: `${0.05 * (indexLetter + indexLine * 100)}s` }} className="typing-animation">
            {letter}
          </span>
        ))}
        {/* Adiciona <br /> entre as linhas, exceto após a última linha */}
        {indexLine < array.length - 1 ? <br key={`br-${indexLine}`} /> : null}
      </React.Fragment>
    ));
  };

  return (
    <div className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl w-full text-white">
      {renderAnimatedText(text)}
    </div>
  );
};

export default TypingAnimation;
