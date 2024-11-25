var chart;
let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Fluid Mechanics: Dynamics of fluid flow</h4>

            <div class="fs-16px">
            <p style="text-align: center; font-weight: 500">Bernoulli's equation for real fluids</p>
            </div>

            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    calculations();
    let btn_text = get_collapse_btn_text("Activity 1", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <h4 style="text-align: center">Activity 1</h4>
        
        <div class="row">
            <div class="col-8">
                <p style="text-align: justify">
                    A pipe of diameter ${dia} mm carries water at ${v} m/s. The pressure at point A and B are ${p_a} N/cm<sup>2</sup> and ${p_b} N/cm<sup>2</sup> respectively. Find the loss of head between A and B. Datum line passes through point A.
                </p>
            </div>
            <div class="col-4">
                <p style="text-align: center">
                    <img style="width: 100%" src="images/realFluid.png">
                </p>
            </div>
        </div>
        
        <div id="a-energy-div">
            <div class="row">
                <p style="font-size: 16px; font-weight: 500">Total energy at point A</p>
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="font-weight: 400; font-size: 18px;">
                        $$ E_A = \\frac{P_A}{\\rho g} + \\frac{v^2_A}{2 g} + z_1 $$
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ E_A = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='a-energy-inp'><span id='a-energy-val-sp'></span> m
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_a_energy();' id='temp-btn-a-energy'>Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div>
        </div>


        <div id="b-energy-div" style="display: none">
            <div class="row">
                <p style="font-size: 16px; font-weight: 500">Total energy at point B</p>
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="font-weight: 400; font-size: 18px;">
                        $$ E_B = \\frac{P_B}{\\rho g} + \\frac{v^2_B}{2 g} + z_2 $$
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ E_B = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='b-energy-inp'><span id='b-energy-val-sp'></span> m
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_b_energy();' id='temp-btn-b-energy'>Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div>
        </div>

        
       
    </div>`;
    maindiv.innerHTML += text;
    //draw_plot();
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function calculations() {
    dia = Math.floor(Math.random() * (200 + 1)) + 300;
    console.log("diameter= ", dia);
    //v = 25;
    v = Math.floor(Math.random() * (5 + 1)) + 25;
    console.log("v= ", v);
    //p_a = 25;
    p_a = Math.floor(Math.random() * (5 + 1)) + 25;
    console.log("p_a= ", p_a);
    //p_b = 20;
    p_b = Math.floor(Math.random() * (4 + 1)) + 20;
    console.log("p_b= ", p_b);
    e_a = ((p_a * Math.pow(10, 4)) / (rho * g)) + (Math.pow(v, 2) / (2 * g)) + z1;
    console.log("ea = ", e_a);
    e_b = ((p_b * Math.pow(10, 4)) / (rho * g)) + (Math.pow(v, 2) / (2 * g)) + z2;
    console.log("eb = ", e_b);
}
function verify_a_energy() {
    let btn = document.getElementById('temp-btn-a-energy');
    let a_energy_inp = document.getElementById('a-energy-inp');
    let sp1 = document.getElementById('a-energy-val-sp');
    if (!verify_values(parseFloat(parseFloat(a_energy_inp.value).toFixed(2)), parseFloat(e_a.toFixed(2)))) {
        alert(`incorrect value`);
        return;
    }
    a_energy_inp.remove();
    sp1.innerText = `${parseFloat(e_a.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('b-energy-div'));
    div.style.display = 'block';
}
function verify_b_energy() {
    let btn = document.getElementById('temp-btn-b-energy');
    let b_energy_inp = document.getElementById('b-energy-inp');
    let sp2 = document.getElementById('b-energy-val-sp');
    if (!verify_values(parseFloat(parseFloat(b_energy_inp.value).toFixed(2)), parseFloat(e_b.toFixed(2)))) {
        alert(`incorrect value`);
        return;
    }
    b_energy_inp.remove();
    sp2.innerText = `${parseFloat(e_b.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    //compare_headloss();
    load_question();
}
function compare_headloss() {
    if (e_a > e_b) {
        head_loss_a = e_a - e_b;
        console.log("head loss a = ", head_loss_a);
        let div = (document.getElementById('head-loss-a-div'));
        div.style.display = 'block';
    }
    else {
        head_loss_b = e_b - e_a;
        console.log("head loss b = ", head_loss_b);
        let div = (document.getElementById('head-loss-b-div'));
        div.style.display = 'block';
    }
}
function verify_head_loss_a() {
    let btn = document.getElementById('temp-btn-head-loss-a');
    let head_loss_a_inp = document.getElementById('head-loss-a-inp');
    let sp3 = document.getElementById('head-loss-a-val-sp');
    if (!verify_values(parseFloat(parseFloat(head_loss_a_inp.value).toFixed(2)), parseFloat(head_loss_a.toFixed(2)))) {
        alert(`incorrect value`);
        return;
    }
    head_loss_a_inp.remove();
    sp3.innerText = `${parseFloat(head_loss_a.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    start_act2();
}
function verify_head_loss_b() {
    let btn = document.getElementById('temp-btn-head-loss-b');
    let head_loss_b_inp = document.getElementById('head-loss-b-inp');
    let sp4 = document.getElementById('head-loss-b-val-sp');
    if (!verify_values(parseFloat(parseFloat(head_loss_b_inp.value).toFixed(2)), parseFloat(head_loss_b.toFixed(2)))) {
        alert(`incorrect value`);
        return;
    }
    head_loss_b_inp.remove();
    sp4.innerText = `${parseFloat(head_loss_b.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    start_act2();
}
function load_question() {
    // let btn: HTMLButtonElement = <HTMLButtonElement>(
    // 	document.getElementById('act1-btn6')
    // );
    // btn && btn.remove();
    let div = (document.getElementById('tb1-box'));
    div.innerHTML += `
   <br>
   <div id="act1-q-box-div">
   
   </div>

   <div id="head-loss-a-div" style="display: none">
        <div class="row">
            <p style="font-size: 16px; font-weight: 500">Total loss of head between A and B</p>
            <div class="col-2"></div>
            <div class="col-4">
                <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ E_A - E_B = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='head-loss-a-inp'><span id='head-loss-a-val-sp'></span> m
                <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_head_loss_a();' id='temp-btn-head-loss-a'>Verify</button>
                </p>
            </div>
            <div class="col-1"></div>
        </div>
    </div>

    <div id="head-loss-b-div" style="display: none">
        <div class="row">
            <p style="font-size: 16px; font-weight: 500">Total loss of head between B and A</p>
            <div class="col-2"></div>
            <div class="col-6">
                <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ E_B - E_A = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='head-loss-b-inp'><span id='head-loss-b-val-sp'></span> m
                <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_head_loss_b();' id='temp-btn-head-loss-b'>Verify</button>
                </p>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
   `;
    let ques = `State the direction of flow.`;
    let opt = ['Flow is from point A to point B', 'Flow is from point B to point A', 'No flow'];
    ans_a1 = e_a > e_b ? '1' : '2';
    let box = (document.getElementById('act1-q-box-div'));
    let question = new Question_Options(ques, opt, ans_a1, box, 'act1-q-box', move_to_act2);
    question.load_question();
    let que = (document.querySelector('#act1-q-box-question-div h5'));
    que.classList.remove('fs-16px');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function move_to_act2() {
    let div = (document.getElementById('tb1-box'));
    let text = ans_a1 === '1' ? 'Flow is from point A to point B' : 'Flow is from point B to point A';
    alert(`The answer is correct.`);
    compare_headloss();
    // let div1: HTMLDivElement = <HTMLDivElement>(
    // 	document.getElementById('act1-q-box-div')
    // );
    // div1.style.display = 'none';
    // let div2: HTMLDivElement = <HTMLDivElement>(
    // 	document.getElementById('met-hg-div')
    // );
    // div2.style.display = 'block';
    // 	div.innerHTML += `
    //    <button class='btn btn-info btn-sm std-btn' id="act1-btn8" onclick='draw_plot();'>Next</button>
    //    `;
}
activity1();
//# sourceMappingURL=activity1.js.map