(function () {
  var timeEl = document.getElementById("location-time");
  var yearEl = document.getElementById("footer-year");
  var weatherEl = document.getElementById("location-weather");
  var sceneCanvas = document.getElementById("portrait-scene");
  var tetrisOpen = document.getElementById("tetris-open");
  var tetrisClose = document.getElementById("tetris-close");
  var tetrisModal = document.getElementById("tetris-modal");
  var tetrisCanvas = document.getElementById("tetris-canvas");
  var tetrisScore = document.getElementById("tetris-score");
  var tetrisLines = document.getElementById("tetris-lines");
  var tetrisTouchButtons = document.querySelectorAll("[data-tetris-action]");
  var root = document.body;
  var themeMedia = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  var ASCII_ART = "====================================================================================================\n===================================================================================================+\n==============================================================================================++++++\n=============================================================================================+++++++\n==========================================================================================++++++++++\n=========================================================================================+++++++++++\n=====================================================================================+++++++++++++++\n+++=================================================================================++++++++++++++++\n++++===============================================================================+++++++++++++++++\n+++++++========================================================================+++++++++++++++++++++\n+++++++++++=====+++++=+========================+++++++======================++++++++++++++++++++++++\n++++++++++++++++++++++++==================+*#%%@@@%@@@@%##+=================++++++++++++++++++++++++\n++++++++++++++++++++++++++++==========++*#%%%%%%%%%%%%%@%@@%#+===========+++++++++++++++++++++++++++\n++++++++++++++++++++++++++++++++++++++##############%%%%%%%%%%%*++=+==++++++++++++++++++++++++++++++\n+++++++++++++++++++++++++++++++++++*##*+======++***++++++++++*#%%#++++++++++++++++++++++++++++++++++\n++++++++++++++++++++++++++++++++++##*-:::::::::-------------===+#@@*++++++++++++++++++++++++++++++++\n+++++++++++++++++++++++++++++++++##=:::::::::::-------------====++%%*+++++++++++++++++++++++++++++++\n+++++++++++++++++++++++++++++++*#+-::::::::::::-------------=====++*%#===============+++++++++++++++\n++++++++++++++++++++++++++++++**=::::::::::::::-------------=====+++*%*==============+++++++++++++**\n++++++++++++++++++++++++++++++*+-::::::::::::::-------------=====++++*%*++++++++++++++++++++***###%%\n+++++++++++++++++++++++++++++**=-:::::::::::::--------------======++++##+++++++++++*#####%%%%%%%%%%#\n++++++++++++++++++++++++++++**+-::::::::::::::------::------======++++*#*++++++++++#%%%%%%%%%####**+\n+++++++++++++++++++++++++++++*+-:::::::::::::::-------------======++++*#*+++++++++++*+++++++++++++##\n+++++++++++++++++++++++++++++*=--::::::::::::::::::::-----=======+++++*#+++++++++++++++++++++++++*#*\n+++++++++++++++++++++++++++=++----==-==++++=--:-::::----=+**********++*#+++++++++++++++++++++++++***\n++++++++++++++++++++++++++++++--------------=--:::::--=+++++=====+++*+*#+++++++++++++++++++++++++***\n++++++++++++++++++++++++++++++------------------:::--=++*+======+++**+*#+++++++++++++++++++++++++***\n++++++++++++++++++++++++++++++-----=++*##***+=--:::-=+*###*###%####***+#++++++++++++++++++++++++++**\n+++++++++++++++++++++++++++=-+----====-*##*++=---::-=*****+*###+****+++#++++++++++++++++++++++++++++\n++++++++++++++++++++++++++++==--:------===++===--:--=++++++++++++++++++**+++++++++++++++++++++++++++\n++++++++++++++++++++++++++=++=--::---:----=---------=++++=+++=====+++++*+++++++++++++++++++++++++*+*\n++++++++++++++++++++++========--::::---------------=+++++===========+++++++++++++++++++++++++++++++*\n++++++++++++++++++++++=======----::::::::---:------=+++++===========++**++++++++++++++++++++++++++++\n+++++++++++++++++=+==+=======-=--::::::::--:-------==++*++=========+++*++++++++++++++++++++++++++***\n+++++++*+++++++++====+=========---:::::::----------==+++*+========+++*++++++++++++++++++++++++*++++*\n+++++++*++++++++=====+=========-----:::::-----=----=++***+==--===++++**++++++++++++++==+++++++*+++++\n++++++++++++++++=====+========+=----::::-----======+****+==--====+++**+++++++++++++++==+=+++++*+++#*\n+++++++++++++++======+===========----:::---------===+*++===--===+++***+++++++++++++++==+==++++*+**#+\n++++++++++++++++==================---:::------======+*++=======+++***+====*+++++++++===+++++++*+#**+\n+**************************++**+==---------------==-=++++++++++++***=:::.-+=====++++========++++++++\n+++********************++=+++++++==-----------=++=+***++++++++++***-..::::---==+++++++++******##==+#\n++++****************+++++++++++++++=-----===++++++++++*++++++++***::-..:::-:---===++++++*****#**+==+\n+++******************++++++++++====+=--------===+++++++++++++****###+-:.::::=--==--==++++++=****++=-\n***+++********###%%##########*+======+===================+++*****%@@@@%%#+--:::::--==-===+==+***++=+\n********##****#%%#####********===+*===+++==-------=======++**##**%@@@@@@%%%%%%%###*****+++-=+=-*++**\n**####%##***##*#*########*##**+#%%#=-==+**+=---------==++*###****#%@@@@@@@%%%%@@@@@@@@@@%%%%*:=+:-%%\n***%@@@%#*++=+*###%%%@%%%%%###%%%%*--=====+*++=======++**##******#%%%%@@@@%%%%%@@@@@@@@@@@@@%%#*--=-\n*#%%@@%%@######%%%@@@@@%%###%%%%@*=---======++****+**###******++**%%%%%%@@%%%%%%%@@@@@@@@@@@@@%%%%=-\n%%%%@%%@%%%###%%@@@%%%%%%##%#%@%%==----==========+++++****+++++++#%%%%%%%@%%%%%%%%%%%%%%%@@@@@@@%%#+\n%%%%%%%%%%###%%%@@%%%%%%%%##%%%%#==------===========+++++++++++++#%%%%%%%@@%%%%%%%%%%%%%%%%@@@@%%%%*\n+++++++==+###%%@@@%%%%%%%#%%%%%%#+=---------=--======+++++++++++#%%%%%%%%%@%%%%%%%%%%%%%%@%%@@@@%%%#\n+++*###%%%##%%@@@@%%%%%%#%%%%%%%#*=-------------==========+++++*%%%%%%%%%%@%%%%%%%%%%%%@@@@@@@@@%%%#\n+*###%%%#%%#%@@%%%%%%%%%%%%%%%%%%*+=-------------==========+++*%%%%%%%%%%%@%%%%%%%%%%%@@@@@%%%@%%%%@\n#####%%#%@%#%@@%%%%%%%%@%%%%%%%%%#*+=-----------===========++#%%%%%%%%%%%%@%%%%%%%%%%@@@@@%%%%%%%%@@\n%%###%#%@@%%@@@@%%%%%@@%%%%%%%%%@%*++=--------============++#%%%%%%%%%%%%%@@%%%%%%%%@@%%@%%%%%%%%@@@\n%%%###@@@%%@@@%%%%%@%@@%%%%%%%%%@@%*+====----=============+#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@\n%%%#%@@%@@@@@@@@@%%@@@%%%%%%%%%@@@%%#+===---=========--==*%##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@%\n@%%%@@%%@@@@@@@@%%@@@%%%%%%%%%%@@@%%%%*==----======----=*##%%%%%%%%%%%%%%%%@%%%%%%%%%%%%%%%%%@@@@@@%\n@%%@@@@%%%%@@@@%@@@@%%%%%%%%%%%%@@%%%%%#+==--==========*%%%%%%%%%%#%%%%%%%@@%%%%%%%%%%%%%%@@@@@@@%%%\n%%@@@@@%%@%@@@@@@@@@%%%%%%%%%%%@@%@%%%%%%#+====+====+*#%%%#%%%%%%##%%%%%#%@@@@%%%%%%%%%@@@%@@@@@%%%%\n%@@@@@%%%%@@@@@@@@@%%%%%%%%%%%@@@%%%%%%%%%%%#####%%#%%####%%%%%%%#%%%%%#%@@@@@@%%%%%@@@@@@%@@@@%%%%%\n@@@@@@%%%%@@@@@@@@%%%%%%%%%%%%@@@%%%%@@%##%####%%%#%%%###%%%%%%%#%%%@%#%%@@@@@@@%%%@@@@@@@%@@@%%%%%%\n@@@@@%%%%%@@@@@@@@%%%%%%%%%%%%@@@@%#%%@@@%%%%%%%%%%%%####%%%%%%%#%%%@%%%%@@@@@@@@%%%%@@@@@%@@@%%%%%%\n@@@@@%%%%%@@@@@@@@%%%%%%%%%%%@@@@@%##%%%%%%%%%%%%%%%#%%#%%%%%%%%#%%@%#%%@@@@@@@@%%%%%@@@@@%@@@%%%%%%\n@@@@@%%%%@@%%@@@@@%%%%@%%%%@@@@@@@%%%#%%%%%%%%%%##%%%%%#%%%%%%%#%%%%%%%%@@@@@@@%%%%%%@@@@@%%@@%%%%%%\n@@@@@%%%%@@%%@@@@@%%%%%%%%@@@@@@@%%%%%#%%%%%%%%%%%%%%##%%%%%%%##%%%%##%%@@@@@@@%%%%%@@@@@@%%@@@%%%%%\n@@@@@%%%%@@%%%@@@%%%%@@@%@@@@@@@@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%###%@@@@@@@@%%%%%@@@@@@%%@@@%%%%%\n@@@@@%%%%@@%%@@@%%%%%%@@%@@@@@@@%%%%%###%%%%%%#%%%%%%%%%%%%%%%#%%%##%%%@@@@@@@%%%%%%@@@@@@%%@@@%%%%%\n@@@@@%%%%@@%@@@@@%@%@@@@@@@@@@@@%%%%%%%%#####%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@%%%%#@@@@@@@%%@@@%%%%%\n@@@@%%%%%@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%#%#####%%%%%%#%%%%%%%%%%%%@@@@@@@%%%%%%@@@@@@@@%@@@%%%%%\n@@@@%%%%%@@@@@@@@@@@@@@@@@@@@@@%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%####%%%%@@@@@@%%%%%@@@@@@@@@%@@@%%%%%\n@@@@%%%%%@@@@@@@@@@@@@@@@@@@@@@%#*#%%%%%%%%%%%%%%%%%%%%%%%%%%#####%%%#%%@@@@%%%%%%@#%#%+*#%%%#*##**#\n@@@@%%%%%@@@@@@@@@@@@@@@@@@@@@%%%%#%%%%%%%%%#%%%%%%%%%%%%%%%%###%%%%%%%%@@@@%%%%#*-##*##@%%%%@@%%%%%\n";
  var WEATHER_LABELS = {
    0: "clear",
    1: "mostly clear",
    2: "partly cloudy",
    3: "overcast",
    45: "fog",
    48: "fog",
    51: "light drizzle",
    53: "drizzle",
    55: "heavy drizzle",
    61: "light rain",
    63: "rain",
    65: "heavy rain",
    66: "freezing rain",
    67: "freezing rain",
    71: "light snow",
    73: "snow",
    75: "heavy snow",
    77: "snow grains",
    80: "rain showers",
    81: "showers",
    82: "heavy showers",
    85: "snow showers",
    86: "snow showers",
    95: "thunderstorm",
    96: "storm and hail",
    99: "storm and hail"
  };
  var currentWeatherCode = null;
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

  function getOsloHour() {
    return parseInt(new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      hour12: false,
      timeZone: "Europe/Oslo"
    }).format(new Date()), 10);
  }

  function getSkyPreset(hour) {
    if (hour >= 21 || hour < 6) return "night";
    if (hour >= 18) return "dusk";
    if (hour < 9) return "morning";
    return "day";
  }

  function getWeatherPreset(code) {
    if (code == null) return "clear";
    if ([45, 48].indexOf(code) !== -1) return "fog";
    if ([51, 53, 55, 61, 63, 65, 66, 67, 80, 81, 82].indexOf(code) !== -1) return "rain";
    if ([2, 3].indexOf(code) !== -1) return "cloud";
    return "clear";
  }

  function applyAtmosphere() {
    var hour = getOsloHour();
    var sky = getSkyPreset(hour);
    var weather = getWeatherPreset(currentWeatherCode);
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
    } else if (sky === "morning") {
      vars["--page-bg"] = "#f7f9fb";
      vars["--muted-fg"] = "#748191";
      vars["--label-fg"] = "rgba(24, 33, 43, 0.66)";
      sceneTheme.accent = "#2a78be";
    } else if (sky === "dusk") {
      vars["--page-bg"] = "#f7f4ef";
      vars["--muted-fg"] = "#7d756d";
      vars["--meta-fg"] = "rgba(41, 33, 24, 0.46)";
      vars["--label-fg"] = "rgba(43, 35, 27, 0.68)";
      vars["--hover-fill"] = "rgba(66, 117, 181, 0.05)";
      sceneTheme.accent = "#4578b7";
      sceneTheme.planeAlpha = 0.34;
    } else if (sky === "night") {
      vars["--page-bg"] = "#0f141a";
      vars["--page-fg"] = "#edf2f7";
      vars["--muted-fg"] = "#96a2af";
      vars["--meta-fg"] = "rgba(237, 242, 247, 0.46)";
      vars["--footer-meta-fg"] = "rgba(237, 242, 247, 0.38)";
      vars["--label-fg"] = "rgba(237, 242, 247, 0.66)";
      vars["--hover-fill"] = "rgba(91, 148, 205, 0.12)";
      vars["--link-strong"] = "rgba(237, 242, 247, 0.36)";
      vars["--link-accent"] = "rgba(113, 172, 231, 0.55)";
      vars["--link-accent-text"] = "#82b8ea";
      sceneTheme.accent = "#f0a826";
      sceneTheme.planeAlpha = 0.26;
      sceneTheme.pointAlpha = 0.94;
    }

    if (weather === "cloud") {
      vars["--page-bg"] = prefersDark || sky === "night" ? "#1c1c1c" : "#f3f6f8";
      vars["--muted-fg"] = prefersDark || sky === "night" ? "#a6a6a6" : "#73808b";
      sceneTheme.accent = prefersDark || sky === "night" ? "#6798c7" : "#4f86c2";
      sceneTheme.planeAlpha *= 0.9;
    } else if (weather === "fog") {
      vars["--page-bg"] = prefersDark || sky === "night" ? "#202020" : "#f4f7f8";
      vars["--muted-fg"] = prefersDark || sky === "night" ? "#aaaaaa" : "#86919a";
      vars["--hover-fill"] = prefersDark || sky === "night" ? "rgba(125, 166, 204, 0.08)" : "rgba(90, 141, 194, 0.06)";
      sceneTheme.accent = prefersDark || sky === "night" ? "#7aa4cc" : "#73a0cc";
      sceneTheme.planeAlpha *= 0.72;
      sceneTheme.pointAlpha *= 0.88;
    } else if (weather === "rain") {
      vars["--page-bg"] = prefersDark || sky === "night" ? "#1b1b1b" : "#eef4f7";
      vars["--muted-fg"] = prefersDark || sky === "night" ? "#a0a0a0" : "#677583";
      vars["--hover-fill"] = prefersDark || sky === "night" ? "rgba(86, 144, 204, 0.09)" : "rgba(61, 119, 176, 0.07)";
      sceneTheme.accent = prefersDark || sky === "night" ? "#5f8db8" : "#3a77b4";
      sceneTheme.planeAlpha *= 0.64;
      sceneTheme.pointAlpha *= 0.9;
    }

    setVars(vars);
  }

  function updateTime() {
    if (!timeEl) return;

    timeEl.textContent = new Date().toLocaleTimeString("en-GB", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Europe/Oslo"
    });

    if (timeEl.textContent.slice(-2) === "00") {
      applyAtmosphere();
    }
  }

  applyAtmosphere();
  updateTime();
  window.setInterval(updateTime, 1000);

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function applyWeather(temperature, code) {
    if (!weatherEl || typeof temperature !== "number") return;
    var label = WEATHER_LABELS[code] || "weather";
    currentWeatherCode = code;
    weatherEl.textContent = ", " + Math.round(temperature) + "° and " + label;
    weatherEl.classList.add("is-loaded");
    applyAtmosphere();
  }

  function loadWeather() {
    if (!weatherEl) return;

    fetch("https://api.open-meteo.com/v1/forecast?latitude=52.5200&longitude=13.4050&current=temperature_2m,weather_code&timezone=Europe%2FBerlin", {
      cache: "no-store"
    })
      .then(function (response) {
        if (!response.ok) throw new Error("Weather request failed");
        return response.json();
      })
      .then(function (data) {
        if (!data || !data.current) return;
        applyWeather(data.current.temperature_2m, data.current.weather_code);
      })
      .catch(function () {
        if (weatherEl) weatherEl.textContent = "";
      });
  }

  loadWeather();

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

  if (tetrisModal && tetrisCanvas && tetrisCanvas.getContext) {
    var gameCtx = tetrisCanvas.getContext("2d");
    var COLS = 10;
    var ROWS = 20;
    var CELL = 24;
    var board = [];
    var currentPiece = null;
    var currentX = 0;
    var currentY = 0;
    var score = 0;
    var lines = 0;
    var gameActive = false;
    var dropElapsed = 0;
    var lastFrame = 0;
    var gameRaf = 0;
    var SHAPES = [
      [[1, 1, 1, 1]],
      [[1, 1], [1, 1]],
      [[0, 1, 0], [1, 1, 1]],
      [[1, 1, 0], [0, 1, 1]],
      [[0, 1, 1], [1, 1, 0]],
      [[1, 0, 0], [1, 1, 1]],
      [[0, 0, 1], [1, 1, 1]]
    ];

    function resetBoard() {
      board = [];
      for (var y = 0; y < ROWS; y += 1) {
        board.push(new Array(COLS).fill(0));
      }
    }

    function updateGameMeta() {
      if (tetrisScore) tetrisScore.textContent = String(score);
      if (tetrisLines) tetrisLines.textContent = String(lines);
    }

    function cloneShape(shape) {
      return shape.map(function (row) { return row.slice(); });
    }

    function randomShape() {
      return cloneShape(SHAPES[Math.floor(Math.random() * SHAPES.length)]);
    }

    function rotateShape(shape) {
      var rotated = [];
      for (var x = 0; x < shape[0].length; x += 1) {
        var row = [];
        for (var y = shape.length - 1; y >= 0; y -= 1) {
          row.push(shape[y][x]);
        }
        rotated.push(row);
      }
      return rotated;
    }

    function collides(shape, offsetX, offsetY) {
      for (var y = 0; y < shape.length; y += 1) {
        for (var x = 0; x < shape[y].length; x += 1) {
          if (!shape[y][x]) continue;
          var px = offsetX + x;
          var py = offsetY + y;
          if (px < 0 || px >= COLS || py >= ROWS) return true;
          if (py >= 0 && board[py][px]) return true;
        }
      }
      return false;
    }

    function spawnPiece() {
      currentPiece = randomShape();
      currentX = Math.floor((COLS - currentPiece[0].length) / 2);
      currentY = -1;
      if (collides(currentPiece, currentX, currentY + 1)) {
        resetBoard();
        score = 0;
        lines = 0;
        updateGameMeta();
      }
    }

    function mergePiece() {
      for (var y = 0; y < currentPiece.length; y += 1) {
        for (var x = 0; x < currentPiece[y].length; x += 1) {
          if (!currentPiece[y][x]) continue;
          var py = currentY + y;
          if (py >= 0) board[py][currentX + x] = 1;
        }
      }
    }

    function clearRows() {
      var cleared = 0;
      for (var y = ROWS - 1; y >= 0; y -= 1) {
        var full = true;
        for (var x = 0; x < COLS; x += 1) {
          if (!board[y][x]) {
            full = false;
            break;
          }
        }
        if (full) {
          board.splice(y, 1);
          board.unshift(new Array(COLS).fill(0));
          cleared += 1;
          y += 1;
        }
      }
      if (cleared > 0) {
        lines += cleared;
        score += cleared * 100;
        updateGameMeta();
      }
    }

    function drawDotCell(x, y, alpha) {
      gameCtx.fillStyle = getCssVar("--page-bg", "#ffffff");
      gameCtx.fillRect(x * CELL, y * CELL, CELL, CELL);
      gameCtx.fillStyle = sceneTheme.accent;
      gameCtx.globalAlpha = alpha;
      for (var dy = 4; dy < CELL - 2; dy += 5) {
        for (var dx = 4; dx < CELL - 2; dx += 5) {
          gameCtx.fillRect(x * CELL + dx, y * CELL + dy, 2.2, 2.2);
        }
      }
      gameCtx.globalAlpha = 1;
    }

    function renderTetris() {
      gameCtx.fillStyle = getCssVar("--page-bg", "#ffffff");
      gameCtx.fillRect(0, 0, COLS * CELL, ROWS * CELL);
      gameCtx.strokeStyle = getCssVar("--link-strong", "rgba(0,0,0,0.18)");
      gameCtx.lineWidth = 1;
      gameCtx.strokeRect(0.5, 0.5, COLS * CELL - 1, ROWS * CELL - 1);

      for (var y = 0; y < ROWS; y += 1) {
        for (var x = 0; x < COLS; x += 1) {
          if (board[y][x]) drawDotCell(x, y, 0.84);
        }
      }

      if (currentPiece) {
        for (var py = 0; py < currentPiece.length; py += 1) {
          for (var px = 0; px < currentPiece[py].length; px += 1) {
            if (!currentPiece[py][px]) continue;
            var by = currentY + py;
            if (by >= 0) drawDotCell(currentX + px, by, 1);
          }
        }
      }
    }

    function stepTetris(timestamp) {
      if (!gameActive) return;
      if (!lastFrame) lastFrame = timestamp;
      dropElapsed += timestamp - lastFrame;
      lastFrame = timestamp;

      if (dropElapsed >= 520) {
        dropElapsed = 0;
        if (!collides(currentPiece, currentX, currentY + 1)) {
          currentY += 1;
        } else {
          mergePiece();
          clearRows();
          spawnPiece();
        }
      }

      renderTetris();
      gameRaf = window.requestAnimationFrame(stepTetris);
    }

    function openTetris() {
      tetrisModal.hidden = false;
      if (!currentPiece) {
        resetBoard();
        score = 0;
        lines = 0;
        updateGameMeta();
        spawnPiece();
      }
      if (!gameActive) {
        gameActive = true;
        dropElapsed = 0;
        lastFrame = 0;
        gameRaf = window.requestAnimationFrame(stepTetris);
      }
      renderTetris();
    }

    function closeTetris() {
      tetrisModal.hidden = true;
      gameActive = false;
      if (gameRaf) window.cancelAnimationFrame(gameRaf);
      gameRaf = 0;
    }

    function restartTetris() {
      resetBoard();
      score = 0;
      lines = 0;
      updateGameMeta();
      spawnPiece();
      renderTetris();
    }

    function softDrop() {
      if (!collides(currentPiece, currentX, currentY + 1)) {
        currentY += 1;
      } else {
        mergePiece();
        clearRows();
        spawnPiece();
      }
      dropElapsed = 0;
    }

    function hardDrop() {
      while (!collides(currentPiece, currentX, currentY + 1)) {
        currentY += 1;
      }
      softDrop();
    }

    if (tetrisOpen) tetrisOpen.addEventListener("click", openTetris);
    if (tetrisClose) tetrisClose.addEventListener("click", closeTetris);
    tetrisModal.addEventListener("click", function (event) {
      if (event.target && event.target.hasAttribute("data-close-game")) closeTetris();
    });

    function handleTetrisAction(action) {
      if (!gameActive || !currentPiece) return;
      if (action === "left") {
        if (!collides(currentPiece, currentX - 1, currentY)) currentX -= 1;
      } else if (action === "right") {
        if (!collides(currentPiece, currentX + 1, currentY)) currentX += 1;
      } else if (action === "down") {
        softDrop();
      } else if (action === "rotate") {
        var rotated = rotateShape(currentPiece);
        if (!collides(rotated, currentX, currentY)) currentPiece = rotated;
      } else if (action === "hard-drop") {
        hardDrop();
      }
      renderTetris();
    }

    tetrisTouchButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        handleTetrisAction(button.getAttribute("data-tetris-action"));
      });
    });

    window.addEventListener("keydown", function (event) {
      if (!gameActive || !currentPiece) return;
      if (event.key === "Escape") {
        closeTetris();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handleTetrisAction("left");
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        handleTetrisAction("right");
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        handleTetrisAction("down");
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        handleTetrisAction("rotate");
      } else if (event.key === " " || event.code === "Space") {
        event.preventDefault();
        handleTetrisAction("hard-drop");
      } else if (event.key.toLowerCase() === "r") {
        event.preventDefault();
        restartTetris();
      }
    });

    resetBoard();
    updateGameMeta();
    spawnPiece();
    renderTetris();
  }
})();
