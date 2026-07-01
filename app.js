(function () {
  var yearEl = document.getElementById("footer-year");
  var sceneCanvas = document.getElementById("portrait-scene");
  var root = document.body;
  var themeMedia = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  var ASCII_ART = "====================================================================================================\n===================================================================================================+\n==============================================================================================++++++\n=============================================================================================+++++++\n==========================================================================================++++++++++\n=========================================================================================+++++++++++\n=====================================================================================+++++++++++++++\n+++=================================================================================++++++++++++++++\n++++===============================================================================+++++++++++++++++\n+++++++========================================================================+++++++++++++++++++++\n+++++++++++=====+++++=+========================+++++++======================++++++++++++++++++++++++\n++++++++++++++++++++++++==================+*#%%@@@%@@@@%##+=================++++++++++++++++++++++++\n++++++++++++++++++++++++++++==========++*#%%%%%%%%%%%%%@%@@%#+===========+++++++++++++++++++++++++++\n++++++++++++++++++++++++++++++++++++++##############%%%%%%%%%%%*++=+==++++++++++++++++++++++++++++++\n+++++++++++++++++++++++++++++++++++*##*+======++***++++++++++*#%%#++++++++++++++++++++++++++++++++++\n++++++++++++++++++++++++++++++++++##*-:::::::::-------------===+#@@*++++++++++++++++++++++++++++++++\n+++++++++++++++++++++++++++++++++##=:::::::::::-------------====++%%*+++++++++++++++++++++++++++++++\n+++++++++++++++++++++++++++++++*#+-::::::::::::-------------=====++*%#===============+++++++++++++++\n++++++++++++++++++++++++++++++**=::::::::::::::-------------=====+++*%*==============+++++++++++++**\n++++++++++++++++++++++++++++++*+-::::::::::::::-------------=====++++*%*++++++++++++++++++++***###%%\n+++++++++++++++++++++++++++++**=-:::::::::::::--------------======++++##+++++++++++*#####%%%%%%%%%%#\n++++++++++++++++++++++++++++**+-::::::::::::::------::------======++++*#*++++++++++#%%%%%%%%%####**+\n+++++++++++++++++++++++++++++*+-:::::::::::::::-------------======++++*#*+++++++++++*+++++++++++++##\n+++++++++++++++++++++++++++++*=--::::::::::::::::::::-----=======+++++*#+++++++++++++++++++++++++*#*\n+++++++++++++++++++++++++++=++----==-==++++=--:-::::----=+**********++*#+++++++++++++++++++++++++***\n++++++++++++++++++++++++++++++--------------=--:::::--=+++++=====+++*+*#+++++++++++++++++++++++++***\n++++++++++++++++++++++++++++++------------------:::--=++*+======+++**+*#+++++++++++++++++++++++++***\n++++++++++++++++++++++++++++++-----=++*##***+=--:::-=+*###*###%####***+#++++++++++++++++++++++++++**\n+++++++++++++++++++++++++++=-+----====-*##*++=---::-=*****+*###+****+++#++++++++++++++++++++++++++++\n++++++++++++++++++++++++++++==--:------===++===--:--=++++++++++++++++++**+++++++++++++++++++++++++++\n++++++++++++++++++++++++++=++=--::---:----=---------=++++=+++=====+++++*+++++++++++++++++++++++++*+*\n++++++++++++++++++++++========--::::---------------=+++++===========+++++++++++++++++++++++++++++++*\n++++++++++++++++++++++=======----::::::::---:------=+++++===========++**++++++++++++++++++++++++++++\n+++++++++++++++++=+==+=======-=--::::::::--:-------==++*++=========+++*++++++++++++++++++++++++++***\n+++++++*+++++++++====+=========---:::::::----------==+++*+========+++*++++++++++++++++++++++++*++++*\n+++++++*++++++++=====+=========-----:::::-----=----=++***+==--===++++**++++++++++++++==+++++++*+++++\n++++++++++++++++=====+========+=----::::-----======+****+==--====+++**+++++++++++++++==+=+++++*+++#*\n+++++++++++++++======+===========----:::---------===+*++===--===+++***+++++++++++++++==+==++++*+**#+\n++++++++++++++++==================---:::------======+*++=======+++***+====*+++++++++===+++++++*+#**+\n+**************************++**+==---------------==-=++++++++++++***=:::.-+=====++++========++++++++\n+++********************++=+++++++==-----------=++=+***++++++++++***-..::::---==+++++++++******##==+#\n++++****************+++++++++++++++=-----===++++++++++*++++++++***::-..:::-:---===++++++*****#**+==+\n+++******************++++++++++====+=--------===+++++++++++++****###+-:.::::=--==--==++++++=****++=-\n***+++********###%%##########*+======+===================+++*****%@@@@%%#+--:::::--==-===+==+***++=+\n********##****#%%#####********===+*===+++==-------=======++**##**%@@@@@@%%%%%%%###*****+++-=+=-*++**\n**####%##***##*#*########*##**+#%%#=-==+**+=---------==++*###****#%@@@@@@@%%%%@@@@@@@@@@%%%%*:=+:-%%\n***%@@@%#*++=+*###%%%@%%%%%###%%%%*--=====+*++=======++**##******#%%%%@@@@%%%%%@@@@@@@@@@@@@%%#*--=-\n*#%%@@%%@######%%%@@@@@%%###%%%%@*=---======++****+**###******++**%%%%%%@@%%%%%%%@@@@@@@@@@@@@%%%%=-\n%%%%@%%@%%%###%%@@@%%%%%%##%#%@%%==----==========+++++****+++++++#%%%%%%%@%%%%%%%%%%%%%%%@@@@@@@%%#+\n%%%%%%%%%%###%%%@@%%%%%%%%##%%%%#==------===========+++++++++++++#%%%%%%%@@%%%%%%%%%%%%%%%%@@@@%%%%*\n+++++++==+###%%@@@%%%%%%%#%%%%%%#+=---------=--======+++++++++++#%%%%%%%%%@%%%%%%%%%%%%%%@%%@@@@%%%#\n+++*###%%%##%%@@@@%%%%%%#%%%%%%%#*=-------------==========+++++*%%%%%%%%%%@%%%%%%%%%%%%@@@@@@@@@%%%#\n+*###%%%#%%#%@@%%%%%%%%%%%%%%%%%%*+=-------------==========+++*%%%%%%%%%%%@%%%%%%%%%%%@@@@@%%%@%%%%@\n#####%%#%@%#%@@%%%%%%%%@%%%%%%%%%#*+=-----------===========++#%%%%%%%%%%%%@%%%%%%%%%%@@@@@%%%%%%%%@@\n%%###%#%@@%%@@@@%%%%%@@%%%%%%%%%@%*++=--------============++#%%%%%%%%%%%%%@@%%%%%%%%@@%%@%%%%%%%%@@@\n%%%###@@@%%@@@%%%%%@%@@%%%%%%%%%@@%*+====----=============+#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@\n%%%#%@@%@@@@@@@@@%%@@@%%%%%%%%%@@@%%#+===---=========--==*%##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@%\n@%%%@@%%@@@@@@@@%%@@@%%%%%%%%%%@@@%%%%*==----======----=*##%%%%%%%%%%%%%%%%@%%%%%%%%%%%%%%%%%@@@@@@%\n@%%@@@@%%%%@@@@%@@@@%%%%%%%%%%%%@@%%%%%#+==--==========*%%%%%%%%%%#%%%%%%%@@%%%%%%%%%%%%%%@@@@@@@%%%\n%%@@@@@%%@%@@@@@@@@@%%%%%%%%%%%@@%@%%%%%%#+====+====+*#%%%#%%%%%%##%%%%%#%@@@@%%%%%%%%%@@@%@@@@@%%%%\n%@@@@@%%%%@@@@@@@@@%%%%%%%%%%%@@@%%%%%%%%%%%#####%%#%%####%%%%%%%#%%%%%#%@@@@@@%%%%%@@@@@@%@@@@%%%%%\n@@@@@@%%%%@@@@@@@@%%%%%%%%%%%%@@@%%%%@@%##%####%%%#%%%###%%%%%%%#%%%@%#%%@@@@@@@%%%@@@@@@@%@@@%%%%%%\n@@@@@%%%%%@@@@@@@@%%%%%%%%%%%%@@@@%#%%@@@%%%%%%%%%%%%####%%%%%%%#%%%@%%%%@@@@@@@@%%%%@@@@@%@@@%%%%%%\n@@@@@%%%%%@@@@@@@@%%%%%%%%%%%@@@@@%##%%%%%%%%%%%%%%%#%%#%%%%%%%%#%%@%#%%@@@@@@@@%%%%%@@@@@%@@@%%%%%%\n@@@@@%%%%@@%%@@@@@%%%%@%%%%@@@@@@@%%%#%%%%%%%%%%##%%%%%#%%%%%%%#%%%%%%%%@@@@@@@%%%%%%@@@@@%%@@%%%%%%\n@@@@@%%%%@@%%@@@@@%%%%%%%%@@@@@@@%%%%%#%%%%%%%%%%%%%%##%%%%%%%##%%%%##%%@@@@@@@%%%%%@@@@@@%%@@@%%%%%\n@@@@@%%%%@@%%%@@@%%%%@@@%@@@@@@@@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%###%@@@@@@@@%%%%%@@@@@@%%@@@%%%%%\n@@@@@%%%%@@%%@@@%%%%%%@@%@@@@@@@%%%%%###%%%%%%#%%%%%%%%%%%%%%%#%%%##%%%@@@@@@@%%%%%%@@@@@@%%@@@%%%%%\n@@@@@%%%%@@%@@@@@%@%@@@@@@@@@@@@%%%%%%%%#####%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@%%%%#@@@@@@@%%@@@%%%%%\n@@@@%%%%%@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%#%#####%%%%%%#%%%%%%%%%%%%@@@@@@@%%%%%%@@@@@@@@%@@@%%%%%\n@@@@%%%%%@@@@@@@@@@@@@@@@@@@@@@%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%####%%%%@@@@@@%%%%%@@@@@@@@@%@@@%%%%%\n@@@@%%%%%@@@@@@@@@@@@@@@@@@@@@@%#*#%%%%%%%%%%%%%%%%%%%%%%%%%%#####%%%#%%@@@@%%%%%%@#%#%+*#%%%#*##**#\n@@@@%%%%%@@@@@@@@@@@@@@@@@@@@@%%%%#%%%%%%%%%#%%%%%%%%%%%%%%%%###%%%%%%%%@@@@%%%%#*-##*##@%%%%@@%%%%%\n";
  var sceneTheme = {
    accent: "#1C75BE",
    planeAlpha: 0.42,
    pointAlpha: 0.92
  };

  function setVars(vars) {
    var keys = Object.keys(vars);
    for (var i = 0; i < keys.length; i += 1) {
      root.style.setProperty(keys[i], vars[keys[i]]);
    }
  }

  function getCssVar(name, fallback) {
    var value = getComputedStyle(root).getPropertyValue(name).trim();
    return value || fallback;
  }

  function applyAtmosphere() {
    var prefersDark = !!(themeMedia && themeMedia.matches);
    var vars = {
      "--page-bg": "#ffffff",
      "--page-fg": "#000000",
      "--muted-fg": "#7c7c7c",
      "--meta-fg": "rgba(0, 0, 0, 0.45)",
      "--footer-meta-fg": "rgba(0, 0, 0, 0.42)",
      "--label-fg": "rgba(0, 0, 0, 0.68)",
      "--hover-fill": "rgba(28, 117, 190, 0.045)",
      "--link-strong": "rgba(0, 0, 0, 0.42)",
      "--link-accent": "rgba(28, 117, 190, 0.45)",
      "--link-accent-text": "#1c75be"
    };

    sceneTheme = {
      accent: "#1C75BE",
      planeAlpha: 0.42,
      pointAlpha: 0.92
    };

    if (prefersDark) {
      vars["--page-bg"] = "#191919";
      vars["--page-fg"] = "#f2f2f2";
      vars["--muted-fg"] = "#a3a3a3";
      vars["--meta-fg"] = "rgba(242, 242, 242, 0.56)";
      vars["--footer-meta-fg"] = "rgba(242, 242, 242, 0.42)";
      vars["--label-fg"] = "rgba(242, 242, 242, 0.9)";
      vars["--hover-fill"] = "rgba(121, 175, 226, 0.07)";
      vars["--link-strong"] = "rgba(242, 242, 242, 0.3)";
      vars["--link-accent"] = "rgba(121, 175, 226, 0.5)";
      vars["--link-accent-text"] = "#9cc2e9";
      sceneTheme.accent = "#5f92c5";
      sceneTheme.planeAlpha = 0.18;
      sceneTheme.pointAlpha = 0.98;
    }

    setVars(vars);
  }

  applyAtmosphere();

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (themeMedia && typeof themeMedia.addEventListener === "function") {
    themeMedia.addEventListener("change", applyAtmosphere);
  } else if (themeMedia && typeof themeMedia.addListener === "function") {
    themeMedia.addListener(applyAtmosphere);
  }

  if (sceneCanvas && sceneCanvas.getContext) {
    var ctx = sceneCanvas.getContext("2d");
    var dpr = window.devicePixelRatio || 1;
    var rows = ASCII_ART.split("\n");
    var points = [];
    var plane = [];
    var angleX = 0.06;
    var angleY = -0.72;
    var velocityY = 0.0022;
    var velocityX = 0;
    var isDragging = false;
    var lastPointerX = 0;
    var lastPointerY = 0;

    for (var y = 0; y < rows.length; y += 1) {
      var row = rows[y];
      for (var x = 0; x < row.length; x += 1) {
        var ch = row.charAt(x);
        if (ch === " ") continue;

        var nx = x / row.length - 0.5;
        var ny = y / rows.length - 0.5;
        var depth = 0.18;
        var size = 1;
        if (ch === "." || ch === ":" || ch === "-") {
          depth = 0.08;
          size = 0.75;
        } else if (ch === "+" || ch === "=") {
          depth = 0.16;
          size = 0.9;
        } else if (ch === "*" || ch === "#") {
          depth = 0.24;
          size = 1.1;
        } else if (ch === "%" || ch === "@") {
          depth = 0.32;
          size = 1.25;
        }

        var faceBulge = Math.max(0, 1 - ((nx * 1.25) * (nx * 1.25) + ((ny + 0.04) * 0.9) * ((ny + 0.04) * 0.9)));
        var torsoBulge = Math.max(0, 1 - ((nx * 0.95) * (nx * 0.95) + ((ny - 0.28) * 1.55) * ((ny - 0.28) * 1.55)));
        depth += faceBulge * 0.11 + torsoBulge * 0.05;

        points.push({
          x: nx * 1.45,
          y: ny * 1.9,
          z: depth,
          size: size
        });
      }
    }

    for (var py = -0.95; py <= 0.95; py += 0.028) {
      for (var px = -0.76; px <= 0.76; px += 0.024) {
        plane.push({ x: px, y: py, z: -0.06, size: 1.05 });
      }
    }

    function resizeScene() {
      var width = Math.max(1, Math.floor(sceneCanvas.clientWidth || sceneCanvas.offsetWidth || 600));
      var height = Math.max(1, Math.floor(sceneCanvas.clientHeight || sceneCanvas.offsetHeight || 600));
      sceneCanvas.width = Math.floor(width * dpr);
      sceneCanvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { width: width, height: height };
    }

    function project(point, angleY, angleX, scale, width, height) {
      var isNarrow = width < 900;
      var cosY = Math.cos(angleY);
      var sinY = Math.sin(angleY);
      var cosX = Math.cos(angleX);
      var sinX = Math.sin(angleX);
      var x1 = point.x * cosY - point.z * sinY;
      var z1 = point.x * sinY + point.z * cosY;
      var y1 = point.y * cosX - z1 * sinX;
      var z2 = point.y * sinX + z1 * cosX;
      var perspective = 1 / (1 + z2 * 1.02 + 0.36);

      return {
        x: width * (isNarrow ? 0.5 : 0.525) + x1 * scale * perspective,
        y: height * (isNarrow ? 0.53 : 0.54) + y1 * scale * perspective,
        size: Math.max(0.7, point.size * perspective * 2.02),
        depth: z2
      };
    }

    function drawScene() {
      var viewport = resizeScene();
      var width = viewport.width;
      var height = viewport.height;
      var isNarrow = width < 900;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = getCssVar("--page-bg", "#ffffff");
      ctx.fillRect(0, 0, width, height);

      if (!isDragging) {
        angleY += velocityY;
        angleX += velocityX;
        velocityY *= 0.988;
        velocityX *= 0.94;

        if (Math.abs(velocityY) < 0.00045) {
          velocityY += (0.0022 - velocityY) * 0.035;
        }

        angleX *= 0.955;
      }

      angleX = Math.max(isNarrow ? -0.13 : -0.2, Math.min(isNarrow ? 0.18 : 0.24, angleX));
      var scale = Math.min(width, height) * (isNarrow ? 0.44 : 0.35);
      var renderPoints = [];

      for (var i = 0; i < plane.length; i += 1) {
        var planePoint = project(plane[i], angleY, angleX, scale, width, height);
        renderPoints.push({
          x: planePoint.x,
          y: planePoint.y,
          size: planePoint.size,
          depth: planePoint.depth,
          alpha: sceneTheme.planeAlpha
        });
      }

      for (var j = 0; j < points.length; j += 1) {
        var point = project(points[j], angleY, angleX, scale, width, height);
        renderPoints.push({
          x: point.x,
          y: point.y,
          size: point.size,
          depth: point.depth + 0.26,
          alpha: sceneTheme.pointAlpha
        });
      }

      renderPoints.sort(function (a, b) {
        return a.depth - b.depth;
      });

      ctx.fillStyle = sceneTheme.accent;
      for (var k = 0; k < renderPoints.length; k += 1) {
        var p = renderPoints[k];
        ctx.globalAlpha = p.alpha;
        var drawSize = p.size * (isNarrow ? 1.5 : 1.28);
        ctx.fillRect(p.x, p.y, drawSize, drawSize);
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(drawScene);
    }

    function beginDrag(clientX, clientY) {
      isDragging = true;
      lastPointerX = clientX;
      lastPointerY = clientY;
    }

    function updateDrag(clientX, clientY) {
      if (!isDragging) return;
      var dx = clientX - lastPointerX;
      var dy = clientY - lastPointerY;
      lastPointerX = clientX;
      lastPointerY = clientY;
      angleY += dx * 0.0046;
      angleX += dy * 0.0022;
      velocityY = dx * 0.00011;
      velocityX = dy * 0.00005;
    }

    function endDrag() {
      isDragging = false;
    }

    sceneCanvas.addEventListener("mousedown", function (event) {
      beginDrag(event.clientX, event.clientY);
    });

    window.addEventListener("mousemove", function (event) {
      updateDrag(event.clientX, event.clientY);
    });

    window.addEventListener("mouseup", endDrag);

    sceneCanvas.addEventListener("touchmove", function (event) {
      if (!event.touches || !event.touches[0]) return;
      updateDrag(event.touches[0].clientX, event.touches[0].clientY);
    }, { passive: true });

    sceneCanvas.addEventListener("touchstart", function (event) {
      if (!event.touches || !event.touches[0]) return;
      beginDrag(event.touches[0].clientX, event.touches[0].clientY);
    }, { passive: true });

    sceneCanvas.addEventListener("touchend", function () {
      endDrag();
    });

    sceneCanvas.addEventListener("mouseleave", function () {
      endDrag();
    });

    window.addEventListener("resize", resizeScene);
    drawScene();
  }

})();
