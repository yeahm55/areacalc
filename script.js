function trapeziumArea() {
      let a = parseFloat(document.getElementById("base1").value);
      let b = parseFloat(document.getElementById("base2").value);
      let h = parseFloat(document.getElementById("heightTrap").value);
      let area = 0.5 * (a + b) * h;
      document.getElementById("trapeziumResult").innerHTML = `Area = ${area.toFixed(2)} m²`;
      console.log("Area of Trapezium:", area);
    }

    
    function timeOfFlight() {
      let u = parseFloat(document.getElementById("velocity").value);
      let theta = parseFloat(document.getElementById("angle").value);
      const g = 9.8;
      let radians = theta * (Math.PI / 180);
      let time = (2 * u * Math.sin(radians)) / g;
      document.getElementById("timeResult").innerHTML = `Time of flight = ${time.toFixed(2)} s`;
      console.log("Time of Flight:", time);
    }

    
    function parallelogramArea() {
      let b = parseFloat(document.getElementById("basePara").value);
      let h = parseFloat(document.getElementById("heightPara").value);
      let area = b * h;
      document.getElementById("paraResult").innerHTML = `Area = ${area.toFixed(2)} m²`;
      console.log("Area of Parallelogram:", area);
    }

    
  