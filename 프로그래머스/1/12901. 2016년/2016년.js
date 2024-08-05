function solution(a, b) {
        const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        const day = new Date(2016, a-1, b);

        let test = day.getDay();
        return days[test];
      }