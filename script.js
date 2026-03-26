  const links = document.querySelectorAll(".new-content a");
  const pages = document.querySelectorAll("#content-new .page");

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const tab = this.dataset.tab; 

      pages.forEach(p =>
        p.classList.toggle("active", p.classList.contains(tab))
      );
    });
  });

  