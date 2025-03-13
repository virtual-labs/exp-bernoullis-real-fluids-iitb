function start_act2() {
    let temp_btn = document.getElementById('temp-btn-act-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    act2_calculations();
    let btn_text = get_collapse_btn_text("Activity 2", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
        
        <h4 style="text-align: center">Activity 2</h4>
        <div class="row">
            <div class="col-8">
                <p style="text-align: justify">
                    A pipe of diameter ${act2_dia_a} mm at A and of diameter ${act2_dia_b} mm at B carries water at ${act2_v_a} m/s at A. The pressure at point A and B are ${act2_p_a} N/cm<sup>2</sup> and ${act2_p_b} N/cm<sup>2</sup> respectively. Find the loss of head between A and B. Datum line passes through point A. <br>
                    Let h = ${h}.
                </p>
            </div>
            <div class="col-4">
                <p style="text-align: center">
                    <img style="width: 100%" src="images/act2RealFluid.png">
                </p>
            </div>
        </div>

        <div id="act2-a-energy-div">
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
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='act2-a-energy-inp'><span id='act2-a-energy-val-sp'></span> m
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='act2_verify_a_energy();' id='act2-temp-btn-a-energy'>Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div>
        </div>

        <div id="act2-aa-div" style="display: none">
            <div class="row">
                <!--<p style="font-size: 16px; font-weight: 500">Total energy at point A</p> -->
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="font-weight: 400; font-size: 18px;">
                        $$ A_A = \\frac{\\pi}{4} * d^2_1 $$
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ A_A = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='act2-aa-inp'><span id='act2-aa-val-sp'></span> m
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='act2_verify_aa();' id='act2-temp-btn-aa'>Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div>
        </div>

        <div id="act2-ab-div" style="display: none">
            <div class="row">
                <!--<p style="font-size: 16px; font-weight: 500">Total energy at point A</p> -->
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="font-weight: 400; font-size: 18px;">
                        $$ A_B = \\frac{\\pi}{4} * d^2_2 $$
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ A_B = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='act2-ab-inp'><span id='act2-ab-val-sp'></span> m
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='act2_verify_ab();' id='act2-temp-btn-ab'>Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div>
        </div>

        <div id="act2-vb-div" style="display: none">
            <div class="row">
                <p style="font-size: 16px; font-weight: 500">Using continuity equation</p>
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="font-weight: 400; font-size: 18px;">
                        $$ A_A * v_a= A_B * v_b $$
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ v_B = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='act2-vb-inp'><span id='act2-vb-val-sp'></span> m/s
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='act2_verify_vb();' id='act2-temp-btn-vb'>Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div>
        </div>

        <div id="act2-b-energy-div" style="display: none">
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
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='act2-b-energy-inp'><span id='act2-b-energy-val-sp'></span> m
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='act2_verify_b_energy();' id='act2-temp-btn-b-energy'>Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div>
        </div>

    </div>
    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function act2_calculations() {
    act2_dia_a = Math.floor(Math.random() * (200 + 1)) + 300;
    console.log("act2_dia_a= ", act2_dia_a);
    act2_dia_b = Math.floor(Math.random() * (200 + 1)) + 450;
    console.log("act2_dia_b= ", act2_dia_b);
    act2_v_a = Math.floor(Math.random() * (5 + 1)) + 25;
    console.log("vact2_v_a= ", act2_v_a);
    act2_p_a = Math.floor(Math.random() * (5 + 1)) + 25;
    console.log("act2_p_a= ", act2_p_a);
    act2_p_b = Math.floor(Math.random() * (4 + 1)) + 20;
    console.log("act2_p_b= ", act2_p_b);
    h = (Math.random() * 3.5) + 0.5;
    h = parseFloat(h.toFixed(1));
    act2_e_a = ((act2_p_a * Math.pow(10, 4)) / (rho * g)) + (Math.pow(act2_v_a, 2) / (2 * g)) + act2_z1;
    console.log("act2_ea = ", act2_e_a);
    act2_aa = (Math.PI / 4) * Math.pow((act2_dia_a / 1000), 2);
    console.log("act2_aa = ", act2_aa);
    act2_ab = (Math.PI / 4) * Math.pow((act2_dia_b / 1000), 2);
    console.log("act2_ab = ", act2_ab);
    act2_v_b = (act2_aa * act2_v_a) / act2_ab;
    console.log("act2_v_b = ", act2_v_b);
    act2_e_b = ((act2_p_a * Math.pow(10, 4)) / (rho * g)) + (Math.pow(act2_v_b, 2) / (2 * g)) + h;
    console.log("act2_eb = ", act2_e_b);
}
function act2_verify_a_energy() {
    let btn = document.getElementById('act2-temp-btn-a-energy');
    let act2_a_energy_inp = document.getElementById('act2-a-energy-inp');
    let sp1 = document.getElementById('act2-a-energy-val-sp');
    if (!verify_values(parseFloat(parseFloat(act2_a_energy_inp.value).toFixed(2)), parseFloat(act2_e_a.toFixed(2)))) {
        alert(`incorrect value`);
        return;
    }
    act2_a_energy_inp.remove();
    sp1.innerText = `${parseFloat(act2_e_a.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('act2-aa-div'));
    div.style.display = 'block';
}
function act2_verify_aa() {
    let btn = document.getElementById('act2-temp-btn-aa');
    let act2_aa_inp = document.getElementById('act2-aa-inp');
    let sp2 = document.getElementById('act2-aa-val-sp');
    if (!verify_values(parseFloat(parseFloat(act2_aa_inp.value).toFixed(2)), parseFloat(act2_aa.toFixed(2)))) {
        alert(`incorrect value`);
        return;
    }
    act2_aa_inp.remove();
    sp2.innerText = `${parseFloat(act2_aa.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('act2-ab-div'));
    div.style.display = 'block';
}
function act2_verify_ab() {
    let btn = document.getElementById('act2-temp-btn-ab');
    let act2_ab_inp = document.getElementById('act2-ab-inp');
    let sp3 = document.getElementById('act2-ab-val-sp');
    if (!verify_values(parseFloat(parseFloat(act2_ab_inp.value).toFixed(2)), parseFloat(act2_ab.toFixed(2)))) {
        alert(`incorrect value`);
        return;
    }
    act2_ab_inp.remove();
    sp3.innerText = `${parseFloat(act2_ab.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('act2-vb-div'));
    div.style.display = 'block';
}
function act2_verify_vb() {
    let btn = document.getElementById('act2-temp-btn-vb');
    let act2_vb_inp = document.getElementById('act2-vb-inp');
    let sp4 = document.getElementById('act2-vb-val-sp');
    if (!verify_values(parseFloat(parseFloat(act2_vb_inp.value).toFixed(2)), parseFloat(act2_v_b.toFixed(2)))) {
        alert(`incorrect value`);
        return;
    }
    act2_vb_inp.remove();
    sp4.innerText = `${parseFloat(act2_v_b.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('act2-b-energy-div'));
    div.style.display = 'block';
}
function act2_verify_b_energy() {
    let btn = document.getElementById('act2-temp-btn-b-energy');
    let act2_b_energy_inp = document.getElementById('act2-b-energy-inp');
    let sp5 = document.getElementById('act2-b-energy-val-sp');
    if (!verify_values(parseFloat(parseFloat(act2_b_energy_inp.value).toFixed(2)), parseFloat(act2_e_b.toFixed(2)))) {
        alert(`incorrect value`);
        return;
    }
    act2_b_energy_inp.remove();
    sp5.innerText = `${parseFloat(act2_e_b.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    load_question2();
}
function load_question2() {
    // let btn: HTMLButtonElement = <HTMLButtonElement>(
    // 	document.getElementById('act1-btn6')
    // );
    // btn && btn.remove();
    let div = (document.getElementById('tb2-box'));
    div.innerHTML += `
   <br>
   <div id="act2-q-box-div">
   
   </div>

   <div id="act2-head-loss-a-div" style="display: none">
        <div class="row">
            <p style="font-size: 16px; font-weight: 500">Total loss of head between A and B</p>
            <div class="col-2"></div>
            <div class="col-4">
                <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ E_A - E_B = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='act2-head-loss-a-inp'><span id='act2-head-loss-a-val-sp'></span> m
                <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='act2_verify_head_loss_a();' id='act2-temp-btn-head-loss-a'>Verify</button>
                </p>
            </div>
            <div class="col-1"></div>
        </div>
    </div>

    <div id="act2-head-loss-b-div" style="display: none">
        <div class="row">
            <p style="font-size: 16px; font-weight: 500">Total loss of head between B and A</p>
            <div class="col-2"></div>
            <div class="col-6">
                <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ E_B - E_A = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='act2-head-loss-b-inp'><span id='act2-head-loss-b-val-sp'></span> m
                <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='act2_verify_head_loss_b();' id='act2-temp-btn-head-loss-b'>Verify</button>
                </p>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
   `;
    let ques = `State the direction of flow.`;
    let opt = ['Flow is from point A to point B', 'Flow is from point B to point A', 'No flow'];
    ans_a2 = act2_e_a > act2_e_b ? '1' : '2';
    let box = (document.getElementById('act2-q-box-div'));
    let question = new Question_Options(ques, opt, ans_a2, box, 'act2-q-box', move_to_act3);
    question.load_question();
    let que = (document.querySelector('#act2-q-box-question-div h5'));
    que.classList.remove('fs-16px');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function move_to_act3() {
    let div = (document.getElementById('tb2-box'));
    let text = ans_a2 === '1' ? 'Flow is from point A to point B' : 'Flow is from point B to point A';
    alert(`The answer is correct.`);
    act2_compare_headloss();
}
function act2_compare_headloss() {
    if (act2_e_a > act2_e_b) {
        act2_head_loss_a = act2_e_a - act2_e_b;
        console.log("act2_head loss a = ", act2_head_loss_a);
        let div = (document.getElementById('act2-head-loss-a-div'));
        div.style.display = 'block';
    }
    else {
        act2_head_loss_b = act2_e_b - act2_e_a;
        console.log("act2_head loss b = ", act2_head_loss_b);
        let div = (document.getElementById('act2-head-loss-b-div'));
        div.style.display = 'block';
    }
}
function act2_verify_head_loss_a() {
    let btn = document.getElementById('act2-temp-btn-head-loss-a');
    let act2_head_loss_a_inp = document.getElementById('act2-head-loss-a-inp');
    let sp6 = document.getElementById('act2-head-loss-a-val-sp');
    if (!verify_values(parseFloat(parseFloat(act2_head_loss_a_inp.value).toFixed(2)), parseFloat(act2_head_loss_a.toFixed(2)))) {
        alert(`incorrect value`);
        return;
    }
    act2_head_loss_a_inp.remove();
    sp6.innerText = `${parseFloat(act2_head_loss_a.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    exp_complete();
}
function act2_verify_head_loss_b() {
    let btn = document.getElementById('act2-temp-btn-head-loss-b');
    let act2_head_loss_b_inp = document.getElementById('act2-head-loss-b-inp');
    let sp7 = document.getElementById('act2-head-loss-b-val-sp');
    if (!verify_values(parseFloat(parseFloat(act2_head_loss_b_inp.value).toFixed(2)), parseFloat(act2_head_loss_b.toFixed(2)))) {
        alert(`incorrect value`);
        return;
    }
    act2_head_loss_b_inp.remove();
    sp7.innerText = `${parseFloat(act2_head_loss_b.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    exp_complete();
}
function exp_complete() {
    let btn = (document.getElementById('temp-btn-act2-spwt'));
    btn && btn.remove();
    alert('Experiment completed');
}
//# sourceMappingURL=activity2.js.map