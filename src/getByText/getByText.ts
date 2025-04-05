const getByText = (
  root: HTMLElement,
  expectedText: string,
): Element | undefined => {
  const elements = Array.from(root.querySelectorAll("*"));

  const textContainer = elements.find((element) =>
    element.textContent?.match(expectedText),
  );

  return textContainer;
};

export default getByText;
