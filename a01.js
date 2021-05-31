function convert(t){
     
        h = +document.getElementById('height').value;
        w = +document.getElementById('weight').value;
        your_bmi = + w/(h*h);
     if (your_bmi < 18.5) info = 'Gầy';
          else if (your_bmi <= 24.9) info = 'Bình thường';
          else if (your_bmi <= 29.9) info = 'Hơi béo';
          else if (your_bmi <= 34.9) info = ' Béo phì cấp độ 1';
          else if (your_bmi <= 39.9) info = ' Béo phì cấp độ 2';
          else info = ' Béo phì cấp độ 3';
    Xin_info = '<div>';
    Xin_info += '<h3>Bạn ' + info + '</h3>';
    Xin_info += '</div>';
     document.getElementById('h_bmi').value = your_bmi;
     document.getElementById('result').innerHTML = Xin_info;


        
     
        
}