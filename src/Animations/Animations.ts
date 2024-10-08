export const animatePointers = (pointer: string, pos: number) => {
    const p: any = document.getElementById(pointer);
    if (p) {
      p.style.display = "inline-block";
      p.style.transform = `translateX(${pos * 40}px)`;
    }
  };
  
  export const animateResultElement = (i: number) => {
    const arrayElement: any = document.getElementById(`a-box-${i}`);
    if (arrayElement) arrayElement.className = "a-box standout";
  };
  
  export const changeSortedColor = (i: number) => {
    const arrayElement: any = document.getElementById(`a-box-${i}`);
    arrayElement.classList.add("invert-array-color");
  };
  export const splitArray = async (i: number) => {
    return new Promise<void>((resolve, reject) => {
      const arrayElement: any = document.getElementById(`a-box-${i}`);
      if (arrayElement) arrayElement.style.marginLeft = "40px";
      resolve();
    });
  };
  
  export const fillArray = (i: number, value: number) => {
    const arrayElement: any = document.getElementById(`a-empty-box-${i}`);
    if (arrayElement) {
      arrayElement.textContent = value.toString();
      arrayElement.className = "a-box";
    }
  };
  export const animateSwap = async (i: number, j: number): Promise<void> => {
    return new Promise((resolve) => {
      const d = (j - i) * 40;
      const arrayElementI: any = document.getElementById(`a-box-${i}`);
      const arrayElementJ: any = document.getElementById(`a-box-${j}`);
  
      const animationF = document.createElement("style");
      animationF.innerHTML = `
        @keyframes forwardSwap {
          0% {
            transform: translate(0px, 0px);
          }
          33% {
            transform: translate(0px, -60px);
          }
          66% {
            transform: translate( ${d}px, -60px);
          }
          100% {
            transform: translate(${d}px, 0px);
          }
        }
      `;
  
      const animationB = document.createElement("style");
      animationB.innerHTML = `
        @keyframes backwardSwap {
          0% {
            transform: translate(0px, 0px);
          }
          33% {
            transform: translate(0px, -60px);
          }
          66% {
            transform: translate(-${d}px, -60px);
          }
          100% {
            transform: translate(-${d}px, 0px);
          }
        }
      `;
  
      // Add event listeners to remove the animation classes after the animation completes
      arrayElementI.addEventListener("animationend", onAnimationEnd);
      arrayElementJ.addEventListener("animationend", onAnimationEnd);
  
      // Append the styles to the head
      document.head.appendChild(animationF);
      document.head.appendChild(animationB);
  
      // Apply the animations to the elements
      arrayElementI.style.animation = "forwardSwap forwards 950ms ease-in-out";
      arrayElementJ.style.animation = "backwardSwap forwards 950ms ease-in-out";
  
      function onAnimationEnd() {
        // Remove event listeners
        arrayElementI.removeEventListener("animationend", onAnimationEnd);
        arrayElementJ.removeEventListener("animationend", onAnimationEnd);
  
        // Remove animation classes
        arrayElementI.style.animation = "";
        arrayElementJ.style.animation = "";
  
        // Remove style elements from the head
        document.head.removeChild(animationF);
        document.head.removeChild(animationB);
  
        // Resolve the Promise when the animation is complete
        resolve();
      }
    });
  };
