function scrollSlider(direction) {
    const slider = document.getElementById('slider');
    const scrollAmount = 320;
    slider.scrollLeft += direction * scrollAmount;
  }