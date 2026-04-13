(function () {
  var timeEl = document.getElementById("location-time");
  var yearEl = document.getElementById("footer-year");
  var weatherEl = document.getElementById("location-weather");
  var sceneCanvas = document.getElementById("portrait-scene");
  var root = document.body;
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

    if (sky === "morning") {
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
      vars["--page-bg"] = "#0d1116";
      vars["--page-fg"] = "#edf2f7";
      vars["--muted-fg"] = "#96a2af";
      vars["--meta-fg"] = "rgba(237, 242, 247, 0.46)";
      vars["--footer-meta-fg"] = "rgba(237, 242, 247, 0.38)";
      vars["--label-fg"] = "rgba(237, 242, 247, 0.66)";
      vars["--hover-fill"] = "rgba(91, 148, 205, 0.12)";
      vars["--link-strong"] = "rgba(237, 242, 247, 0.36)";
      vars["--link-accent"] = "rgba(113, 172, 231, 0.55)";
      vars["--link-accent-text"] = "#82b8ea";
      sceneTheme.accent = "#5b9ad5";
      sceneTheme.planeAlpha = 0.24;
      sceneTheme.pointAlpha = 0.9;
    }

    if (weather === "cloud") {
      vars["--page-bg"] = sky === "night" ? "#0f141a" : "#f3f6f8";
      vars["--muted-fg"] = sky === "night" ? "#98a4b0" : "#73808b";
      sceneTheme.accent = sky === "night" ? "#6ea8dc" : "#4f86c2";
      sceneTheme.planeAlpha *= 0.9;
    } else if (weather === "fog") {
      vars["--page-bg"] = sky === "night" ? "#101417" : "#f4f7f8";
      vars["--muted-fg"] = sky === "night" ? "#a2acb7" : "#86919a";
      vars["--hover-fill"] = sky === "night" ? "rgba(125, 166, 204, 0.1)" : "rgba(90, 141, 194, 0.06)";
      sceneTheme.accent = sky === "night" ? "#7ba8d1" : "#73a0cc";
      sceneTheme.planeAlpha *= 0.72;
      sceneTheme.pointAlpha *= 0.88;
    } else if (weather === "rain") {
      vars["--page-bg"] = sky === "night" ? "#0e1318" : "#eef4f7";
      vars["--muted-fg"] = sky === "night" ? "#9aa5b1" : "#677583";
      vars["--hover-fill"] = sky === "night" ? "rgba(86, 144, 204, 0.12)" : "rgba(61, 119, 176, 0.07)";
      sceneTheme.accent = sky === "night" ? "#6ea4d8" : "#3a77b4";
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

    fetch("https://api.open-meteo.com/v1/forecast?latitude=59.9139&longitude=10.7522&current=temperature_2m,weather_code&timezone=Europe%2FOslo", {
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

  if (sceneCanvas && sceneCanvas.getContext) {
    var ctx = sceneCanvas.getContext("2d");
    var dpr = window.devicePixelRatio || 1;
    var rows = ASCII_ART.split("\n");
    var points = [];
    var plane = [];
    var mouseX = 0;
    var mouseY = 0;
    var targetX = 0;
    var targetY = 0;
    var rotation = -0.72;

    for (var y = 0; y < rows.length; y += 1) {
      var row = rows[y];
      for (var x = 0; x < row.length; x += 1) {
        var ch = row.charAt(x);
        if (ch === " ") continue;

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

        points.push({
          x: (x / row.length - 0.5) * 1.45,
          y: (y / rows.length - 0.5) * 1.9,
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
      var perspective = 1 / (1 + z2 * 0.9 + 0.42);

      return {
        x: width * (isNarrow ? 0.5 : 0.525) + x1 * scale * perspective,
        y: height * (isNarrow ? 0.53 : 0.54) + y1 * scale * perspective,
        size: Math.max(0.7, point.size * perspective * 1.9),
        depth: z2
      };
    }

    function drawScene() {
      var viewport = resizeScene();
      var width = viewport.width;
      var height = viewport.height;
      var isNarrow = width < 900;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, width, height);

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      rotation += 0.0038;
      if (rotation > Math.PI * 2) {
        rotation -= Math.PI * 2;
      }

      var angleY = rotation + mouseX * (isNarrow ? 0.2 : 0.35);
      var angleX = (isNarrow ? 0.02 : 0.06) + mouseY * (isNarrow ? 0.12 : 0.22);
      var scale = Math.min(width, height) * (isNarrow ? 0.56 : 0.48);
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
          depth: point.depth + 0.2,
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
        var drawSize = p.size * (isNarrow ? 1.9 : 1.65);
        ctx.fillRect(p.x, p.y, drawSize, drawSize);
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(drawScene);
    }

    function updateTargetFromPointer(clientX, clientY) {
      var rect = sceneCanvas.getBoundingClientRect();
      targetX = ((clientX - rect.left) / Math.max(1, rect.width)) - 0.5;
      targetY = ((clientY - rect.top) / Math.max(1, rect.height)) - 0.5;
    }

    sceneCanvas.addEventListener("mousemove", function (event) {
      updateTargetFromPointer(event.clientX, event.clientY);
    });

    sceneCanvas.addEventListener("touchmove", function (event) {
      if (!event.touches || !event.touches[0]) return;
      updateTargetFromPointer(event.touches[0].clientX, event.touches[0].clientY);
    }, { passive: true });

    sceneCanvas.addEventListener("touchend", function () {
      targetX = 0;
      targetY = 0;
    });

    sceneCanvas.addEventListener("mouseleave", function () {
      targetX = 0;
      targetY = 0;
    });

    window.addEventListener("resize", resizeScene);
    drawScene();
  }
})();
