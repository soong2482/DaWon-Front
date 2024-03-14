function scrollJS()
{
        document.querySelector('#scroll-car').addEventListener('click', function () {
          window.scrollTo({
            top: 920,
            left: 0,
            behavior: "smooth"
          })
        });
        document.querySelector('#scroll-customerreview').addEventListener('click', function () {
          window.scrollTo({
            top: 5720,
            left: 0,
            behavior: "smooth"
          })
        });
}
export default scrollJS;