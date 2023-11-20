

export const smoothScroll = (refId: string) => {
    const element = document.getElementById(refId);
    console.log(element)
    if (element) {

        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
        });
    }
};