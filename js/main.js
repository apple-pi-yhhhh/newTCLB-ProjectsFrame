$(async () => {
  $('progress').attr("max", $(window).height() - window.innerHeight);
  await sleep(100)
  $('body').scrollTop(0)
})
$(window).scroll(() => {
  $('progress').attr("value", $(window).scrollTop());
});