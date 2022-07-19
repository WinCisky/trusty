let stars_number = 5;

function handleStarClick(evt: any) {
  const selected_index = evt.currentTarget.index;
  for (let index = 1; index <= stars_number; index++) {
    const element = document.querySelector(`#star-${index}`);
    index <= selected_index
      ? element?.classList.add("checked")
      : element?.classList.remove("checked");
  }
}

for (let index = 1; index <= stars_number; index++) {
  const element: any = document.querySelector(`#star-${index}`);
  if (element) {
    element.index = index;
    element.addEventListener("click", handleStarClick, false);
  }
}

export {};