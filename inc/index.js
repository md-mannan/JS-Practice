 // JS Array

      var category = [
        "Fasion",
        "Beauty",
        "Home  Aplience",
        "Crocaries",
        "Grocery",
      ];
      // var i;
      // for (i = 0; i < category.length; i++) {
      //   document.write(`${i}.` + category[i] + "<br/>");
      // }
      for (var item in category) {
        document.write(`${item}.` + category[item] + "<br/>");
      }