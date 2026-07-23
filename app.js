// Hardcoded Admin Credentials
const ADMIN = { email: "dilipthedon3@gmail.com", password: "DilipBtech@1234" };

// GATE 2027 Official Syllabus Extracted Directly from Provided PDF Documents with Uncut 7 Sections
const gateSyllabusByBranch = {
  aids: {
    code: "DA — Data Science and Artificial Intelligence",
    organizer: "IIT Madras (GATE 2027)",
    sections: [
      { name: "Section 1: Probability and Statistics", topics: ["Counting (permutation and combinations), probability axioms, Sample space, events, independent events, mutually exclusive events, marginal, conditional and joint probability, Bayes Theorem", "Conditional expectation and variance, mean, median, mode and standard deviation, correlation, and covariance", "Random variables, discrete random variables and probability mass functions, uniform, Bernoulli, binomial distribution", "Continuous random variables and probability distribution function, uniform, exponential, Poisson, normal, standard normal, t-distribution, chi-squared distributions, cumulative distribution function, Conditional PDF", "Central limit theorem, confidence interval, z-test, t-test, chi-squared test."] },
      { name: "Section 2: Linear Algebra", topics: ["Vector space, subspaces, linear dependence and independence of vectors, matrices, projection matrix, orthogonal matrix, idempotent matrix, partition matrix and their properties", "Quadratic forms, systems of linear equations and solutions; Gaussian elimination, eigenvalues and eigenvectors, determinant, rank, nullity, projections, LU decomposition, singular value decomposition."] },
      { name: "Section 3: Calculus and Optimization", topics: ["Functions of a single variable, limit, continuity and differentiability, Taylor series, maxima and minima, optimization involving a single variable."] },
      { name: "Section 4: Programming, Data Structures and Algorithms", topics: ["Programming in Python, basic data structures: stacks, queues, linked lists, trees, hash tables", "Search algorithms: linear search and binary search, basic sorting algorithms: selection sort, bubble sort and insertion sort; divide and conquer: mergesort, quicksort", "Introduction to graph theory; basic graph algorithms: traversals and shortest path."] },
      { name: "Section 5: Database Management and Warehousing", topics: ["ER-model, relational model: relational algebra, tuple calculus, SQL, integrity constraints, normal form, file organization, indexing", "Data types, data transformation such as normalization, discretization, sampling, compression", "Data warehouse modelling: schema for multidimensional data models, concept hierarchies, measures: categorization and computations."] },
      { name: "Section 6: Machine Learning", topics: ["Supervised Learning: regression and classification problems, simple linear regression, multiple linear regression, ridge regression, logistic regression, k-nearest neighbour, naive Bayes classifier, linear discriminant analysis, support vector machine, decision trees, bias-variance trade-off, cross-validation methods such as leave-one-out (LOO) cross-validation, k-folds cross-validation, multi-layer perceptron, feed-forward neural network", "Unsupervised Learning: clustering algorithms, k-means/k-medoid, hierarchical clustering, top-down, bottom-up: single-linkage, multiple-linkage, dimensionality reduction, principal component analysis."] },
      { name: "Section 7: Artificial Intelligence", topics: ["Search: informed, uninformed, adversarial; logic, propositional, predicate", "Reasoning under uncertainty topics conditional independence representation, exact inference through variable elimination, and approximate inference through sampling."] }
    ]
  },
  ece: {
    code: "EC — Electronics and Communication Engineering",
    organizer: "IIT Madras (GATE 2027)",
    sections: [
      { name: "Section 1: Engineering Mathematics", topics: ["Linear Algebra: Vector space, basis, linear dependence and independence, matrix algebra, eigen values and eigen vectors, rank, solution of linear equations - existence and uniqueness.", "Calculus: Mean value theorems, theorems of integral calculus, evaluation of definite and improper integrals, partial derivatives, maxima and minima, multiple integrals, line, surface and volume integrals, Taylor series.", "Differential Equations: Linear differential equations, Euler-Cauchy equation, Nonhomogeneous equations, methods of solution using variation of parameters, complementary function and particular integral, partial differential equations, variable separable method, initial and boundary value problems.", "Vector Analysis: Vectors in plane and space, vector operations, gradient, divergence and curl, Gauss's, Green's and Stokes' theorems.", "Complex Analysis: Analytic functions, Cauchy's integral theorem, Cauchy's integral formula, sequences, series, convergence tests, Taylor and Laurent series, residue theorem.", "Probability and Statistics: Mean, median, mode, standard deviation, combinatorial probability, probability distributions, binomial distribution, Poisson distribution, exponential distribution, normal distribution, joint and conditional probability, correlation and regression analysis."] },
      { name: "Section 2: Networks, Signals and Systems", topics: ["Circuit Analysis: Node and mesh analysis, superposition, Thevenin's theorem, Norton's theorem, reciprocity. Sinusoidal steady state analysis: phasors, complex power, maximum power transfer.", "Time and frequency domain analysis of linear circuits: RL, RC and RLC circuits, solution of network equations using Laplace transform. Linear 2-port network parameters, wye-delta transformation.", "LTI systems: definition and properties, causality, stability, impulse response, convolution, poles and zeroes, frequency response, group delay, phase delay.", "Continuous-time Signals: Fourier series and Fourier transform, Nyquist sampling theorem, sampling and reconstruction. Discrete-time Signals: DTFT, DFT, z-transform, FIR and IIR filter design."] },
      { name: "Section 3: Electronic Devices", topics: ["Formation of energy bands in solids, energy bands in intrinsic and extrinsic semiconductors, equilibrium carrier concentration, direct and indirect band-gap semiconductors.", "Carrier Transport: Diffusion current, drift current, mobility and resistivity, generation and recombination of carriers, Poisson and continuity equations.", "P-N junction, Zener diode, BJT, MOS capacitor, MOSFET, scaling in MOSFETs, LED, photo diode and solar cell."] },
      { name: "Section 4: Analog Circuits", topics: ["Diode Circuits: Clipping, clamping and rectifiers.", "BJT and MOSFET Amplifiers: Biasing, AC coupling, small signal analysis, frequency response. Current mirrors and differential amplifiers.", "Op-amp Circuits: Amplifiers, summers, differentiators, integrators, active filters, Schmitt trigger and oscillators, dominant-pole (Miller) compensation, phase margin."] },
      { name: "Section 5: Digital Circuits", topics: ["Number Representations: Binary, integer and floating-point numbers. Combinatorial circuits: Boolean algebra, minimization of functions using Boolean identities and Karnaugh map, logic gates and their static CMOS implementations, arithmetic circuits, code converters, multiplexers, decoders.", "Sequential Circuits: Latches and flip-flops, counters, shift-registers, finite state machines, propagation delay, setup and hold time, critical path delay. Data Converters: Sample and hold circuits, ADCs and DACs. Semiconductor Memories: ROM, SRAM, DRAM. Computer Organization: Machine instructions and addressing modes, ALU, data-path and control unit, instruction pipelining."] },
      { name: "Section 6: Control Systems", topics: ["Basic control system components; Feedback principle; Transfer function; Block diagram representation; Signal flow graph; Transient and steady-state analysis of LTI systems; Frequency response; Routh-Hurwitz and Nyquist stability criteria; Bode and root-locus plots; compensators, PID controller; State variable model and solution of state equation of LTI systems."] },
      { name: "Section 7: Communications & Electromagnetics", topics: ["Random Processes: Autocorrelation and power spectral density, properties of white noise, filtering of random signals through LTI systems.", "Analog Communications: AM and FM modulation and demodulation, spectra, superheterodyne receivers. Information Theory: Entropy, source coding, mutual information, channel capacity theorem.", "Digital Communications: PCM, DPCM, ASK, PSK, FSK, QAM, bandwidth, inter-symbol interference, MAP, ML detection, matched filter receiver, SNR and BER. Fundamentals of error correction, Hamming codes, CRC.", "Electromagnetics: Maxwell's Equations, Plane Waves, Transmission Lines, Smith Chart, Waveguides, Antennas."] }
    ]
  },
  cs: {
    code: "CS — Computer Science and Information Technology",
    organizer: "IIT Madras (GATE 2027)",
    sections: [
      { name: "Section 1: Engineering Mathematics", topics: ["Discrete Mathematics: Propositional and first order logic. Sets, relations, functions, partial orders and lattices. Monoids, Groups. Graphs: connectivity, matching, colouring. Combinatorics: counting, recurrence relations, generating functions.", "Linear Algebra: Matrices, determinants, system of linear equations, eigenvalues and eigenvectors, LU decomposition.", "Calculus: Limits, continuity and differentiability, Maxima and minima, Mean value theorem, Integration.", "Probability and Statistics: Random variables, Uniform, normal, exponential, Poisson and binomial distributions. Mean, median, mode and standard deviation. Conditional probability and Bayes theorem."] },
      { name: "Section 2: Digital Logic", topics: ["Boolean algebra and minimization, algebraic technique, Karnaugh map, tabular method.", "Design of combinational and sequential circuits.", "Number representation and arithmetic (fixed and floating point)."] },
      { name: "Section 3: Computer Organization and Architecture", topics: ["Instruction set and addressing modes. Design of arithmetic and logic unit (ALU). Design of control unit hardwired and microprogrammed.", "Memory interfacing and hierarchy: performance, cache memory mapping.", "I/O interface (interrupt and DMA). Instruction pipelining, pipeline hazards."] },
      { name: "Section 4: Programming and Data Structures", topics: ["Programming in C. Recursion.", "Arrays, stacks, queues, linked lists, trees, binary search trees, binary heaps, graphs."] },
      { name: "Section 5: Algorithms", topics: ["Searching, sorting, hashing. Asymptotic worst case time and space complexity.", "Algorithm design techniques: greedy, dynamic programming and divide-and-conquer.", "Graph traversals, minimum spanning trees, shortest paths."] },
      { name: "Section 6: Theory of Computation & Compiler Design", topics: ["Regular expressions and finite automata. Context-free grammars and push-down automata. Regular and context-free languages, pumping lemma. Turing machines and undecidability.", "Lexical analysis, parsing, syntax-directed translation. Runtime environments. Intermediate code generation. Local optimisation, Data flow analyses: constant propagation, liveness analysis, common sub expression elimination."] },
      { name: "Section 7: Operating System, Databases & Computer Networks", topics: ["OS: System calls, processes, threads, inter-process communication, concurrency and synchronization. Deadlock. CPU and I/O scheduling. Memory management and virtual memory. File systems.", "Databases: ER-model. Relational model: relational algebra, tuple calculus, SQL. Integrity constraints, normal forms. File organization, indexing (e.g., B and B+ trees). Transactions and concurrency control.", "Networks: Principles of Layering; Basics of switching and performance metrics; Data link layer: error detection, MAC, Ethernet; Routing (Distance vector, link state); IPv4 - Fragmentation, CIDR, NAT; TCP - flow and congestion control, socket API; DNS and HTTP."] }
    ]
  },
  electrical: {
    code: "EE — Electrical Engineering",
    organizer: "IIT Madras (GATE 2027)",
    sections: [
      { name: "Section 1: Engineering Mathematics", topics: ["Linear Algebra: Matrix Algebra, Systems of linear equations, Eigen values, Eigen vectors.", "Calculus: Mean value theorems, Theorems of integral calculus, Partial Derivatives, Maxima and minima, Multiple integrals, Fourier series, Vector identities, Line, Surface, Volume integrals, Stokes, Gauss, Divergence theorems.", "Differential Equations: First order, Higher order linear differential equations with constant coefficients, Method of variation of parameters, Cauchy and Euler equations, Initial and boundary value problems, PDEs.", "Complex Variables: Analytic functions, Cauchy integral theorem & formula, Taylor & Laurent series, Residue theorem.", "Probability and Statistics: Sampling theorems, Conditional probability, Mean, Median, Mode, Standard Deviation, Random variables, Discrete & Continuous distributions, Poisson, Normal, Binomial, Correlation & Regression analysis."] },
      { name: "Section 2: Electric Circuits", topics: ["Network Elements: Voltage and current sources, R, L, C, M elements.", "Network solution methods: KCL, KVL, Node and Mesh analysis.", "Network Theorems: Thevenin's, Norton's, Superposition and Maximum Power Transfer theorem.", "Transient response of DC and AC networks, sinusoidal steady-state analysis, resonance, two port networks, balanced three phase circuits, star-delta transformation, complex power and power factor."] },
      { name: "Section 3: Electromagnetic Fields", topics: ["Coulomb's Law, Electric Field Intensity, Electric Flux Density, Gauss's Law, Divergence, Potential due to charge distributions, Effect of dielectric medium, Capacitance.", "Biot-Savart's law, Ampere's law, Curl, Faraday's law, Lorentz force, Inductance, Reluctance, Magnetic circuits, Self and Mutual inductance."] },
      { name: "Section 4: Signals and Systems", topics: ["Representation of continuous and discrete time signals, shifting and scaling properties, LTI and causal systems.", "Fourier series, Sampling theorem, Applications of Fourier Transform, Laplace Transform and Z transform.", "R.M.S. value and average value calculation for periodic waveforms."] },
      { name: "Section 5: Electrical Machines", topics: ["Single phase & Three-phase transformers: equivalent circuit, phasor diagram, tests, regulation, efficiency, parallel operation.", "Auto-transformer, DC machines: motoring and generating mode, characteristics, speed control.", "Three-phase induction machines: torque-speed characteristics, starting and speed control. Synchronous machines: regulation, parallel operation."] },
      { name: "Section 6: Power Systems & Control Systems", topics: ["Power generation, AC/DC transmission, Load Flow (Gauss-Seidel, Newton-Raphson), Fault analysis, Protection, System stability.", "Control Systems: Feedback principle, transfer function, Block diagrams, Signal flow graphs, Routh-Hurwitz, Nyquist criteria, Bode plots, Root loci, PID controllers, State space model."] },
      { name: "Section 7: Measurements, Electronics & Power Electronics", topics: ["Bridges, Digital voltmeters, Oscilloscopes, Error analysis.", "Diode circuits, Amplifiers, Op-Amps, Active filters, Combinatorial and sequential logic circuits.", "Power Electronics: Thyristor, MOSFET, IGBT, Buck/Boost Converters, Inverters, SPWM."] }
    ]
  },
  instrumentation: {
    code: "IN — Instrumentation Engineering",
    organizer: "IIT Madras (GATE 2027)",
    sections: [
      { name: "Section 1: Engineering Mathematics", topics: ["Linear Algebra: Matrix algebra, systems of linear equations, consistency and rank, eigenvalues and eigenvectors, tensors.", "Calculus: Functions, limits, continuity, partial derivatives, maxima/minima, multiple integrals, Stokes, Gauss & Green's theorems.", "Differential Equations: ODEs, PDEs, Cauchy & Euler equations, Initial and boundary value problems.", "Complex Variables & Probability: Analytic functions, Cauchy integral theorem, Taylor/Laurent series, Residue theorem, Discrete & continuous distributions, Bayes theorem.", "Numerical Methods: Matrix equations, non-linear algebraic equations, regression, backpropagation for neural networks."] },
      { name: "Section 2: Electricity and Magnetism", topics: ["Coulomb's law, Electric field & potential, Gauss' law, Capacitance, Magnetic field intensity, Biot-Savart's law, Ampere's law, Faraday's law, Lorentz force, Self & mutual inductance, Maxwell's equations."] },
      { name: "Section 3: Electrical Circuits and Machines", topics: ["Circuit analysis: Kirchhoff's laws, mesh and nodal analysis, Thevenin, Norton, Superposition, Maximum power transfer theorems.", "AC quantities: Peak, average, rms values, power factor, resonance, two-port networks.", "Electrical Machines: Single phase transformers, synchronous machines, buck/boost converters, rectifiers, PWM control."] },
      { name: "Section 4: Signals and Systems", topics: ["Periodic/aperiodic signals, sampling, Fourier series, Laplace, Fourier and z-transforms, DFT/FFT, LTI systems, transfer functions, FIR and IIR filters."] },
      { name: "Section 5: Control Systems", topics: ["Feedback principles, signal flow graphs, transient response, Bode plot, Routh/Nyquist criteria, root loci, state-space representation, Actuators, PID tuning, Lead/Lag compensators, DCS & PLC basics."] },
      { name: "Section 6: Analog Electronics", topics: ["Diode types & applications, BJT and MOSFET circuits, small signal analysis, Op-Amps & applications (adder, integrator, active filters, Schmitt trigger, multivibrators, oscillators, PLL), Noise generated by components, shielding & grounding."] },
      { name: "Section 7: Digital Electronics, Measurements & Sensors", topics: ["Number systems, Combinational/Sequential logic, CMOS, ADCs/DACs, Microcontrollers, Data acquisition, IoT, AI applications.", "Bridges (Wheatstone, Kelvin, Maxwell), Oscilloscopes, Spectrum analyzer.", "Resistive/Capacitive/Inductive/Piezoelectric sensors, Transducers (displacement, force, pressure, flow, temperature, pH), Fiber optic sensing."] }
    ]
  }
};

// Users Database (Default demo user includes password)
let usersDb = JSON.parse(localStorage.getItem('usersDb')) || [
  { id: "STU-101", name: "Dilip Thotavari", email: "dilip@gmail.com", password: "password123", roll: "23MT1A3101", branch: "aids", status: "Verified" }
];

let moduleResources = JSON.parse(localStorage.getItem('moduleResources')) || {
  gate: [],
  nptel: [],
  comm: []
};

let session = JSON.parse(localStorage.getItem('session')) || null;

// Auth Logic
function toggleAuth(mode) {
  document.getElementById('form-signin').classList.toggle('hidden', mode === 'signup');
  document.getElementById('form-signup').classList.toggle('hidden', mode === 'signin');
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-password').value.trim();

  // 1. Check for Admin Login
  if (email.toLowerCase() === ADMIN.email.toLowerCase() && pass === ADMIN.password) {
    session = { name: "System Admin", email: email, branch: "cs", isAdmin: true };
    localStorage.setItem('session', JSON.stringify(session));
    window.location.href = "dashboard.html";
    return;
  }

  // 2. Strict Credential Check for Student Accounts
  const foundUser = usersDb.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === pass);

  if (foundUser) {
    session = { name: foundUser.name, email: foundUser.email, branch: foundUser.branch, isAdmin: false };
    localStorage.setItem('session', JSON.stringify(session));
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials! Please check your email and password or register a new account.");
  }
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const roll = document.getElementById('reg-roll').value.trim();
  const branch = document.getElementById('reg-branch').value;
  const passwordInputs = e.target.querySelectorAll('input[type="password"]');
  const password = passwordInputs[0] ? passwordInputs[0].value.trim() : "";

  // Check if user already exists
  const existingUser = usersDb.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (existingUser) {
    alert("An account with this email already exists. Please sign in instead.");
    toggleAuth('signin');
    return;
  }

  // Save new user including the password
  const newUser = { 
    id: `STU-${100 + usersDb.length + 1}`, 
    name, 
    email, 
    password, 
    roll, 
    branch, 
    status: "Registered" 
  };

  usersDb.push(newUser);
  localStorage.setItem('usersDb', JSON.stringify(usersDb));

  session = { name, email, branch, isAdmin: false };
  localStorage.setItem('session', JSON.stringify(session));
  window.location.href = "dashboard.html";
}

function logout() {
  localStorage.removeItem('session');
  window.location.href = "index.html";
}

// Page Handlers
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  if (path.includes('dashboard.html') || path.includes('module.html')) {
    if (!session) { window.location.href = "index.html"; return; }

    const roleTag = document.getElementById('role-tag');
    if (roleTag) {
      roleTag.innerText = session.isAdmin ? "Admin Workspace" : "Student Account";
      roleTag.className = session.isAdmin ? "text-[10px] font-bold px-2.5 py-1 rounded-full border border-red-500/50 bg-red-500/20 text-red-400" : "text-[10px] font-bold px-2.5 py-1 rounded-full border border-blue-500/50 bg-blue-500/20 text-blue-400";
    }

    if (document.getElementById('user-display-name')) document.getElementById('user-display-name').innerText = session.name;
    if (document.getElementById('welcome-name')) document.getElementById('welcome-name').innerText = session.name;
    if (document.getElementById('user-branch-badge')) document.getElementById('user-branch-badge').innerText = session.branch.toUpperCase();

    if (session.isAdmin && document.getElementById('admin-tabs')) {
      document.getElementById('admin-tabs').classList.remove('hidden');
      renderAdminTable();
    }

    if (path.includes('module.html')) {
      renderModuleView();
    }
  }
});

function switchTab(tab) {
  document.getElementById('tab-courses-view').classList.toggle('hidden', tab !== 'courses');
  document.getElementById('tab-admin-view').classList.toggle('hidden', tab !== 'admin');
}

function goToModule(mod) {
  localStorage.setItem('activeModule', mod);
  window.location.href = 'module.html';
}

function renderAdminTable() {
  const tbody = document.getElementById('admin-table-body');
  if (!tbody) return;

  tbody.innerHTML = usersDb.map(u => `
    <tr>
      <td class="p-3 font-semibold text-white">${u.name}</td>
      <td class="p-3">${u.email} <br><span class="text-[10px] text-slate-500">${u.roll || 'N/A'}</span></td>
      <td class="p-3"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-blue-400 uppercase">${u.branch || 'AIDS'}</span></td>
      <td class="p-3"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400">Enrolled</span></td>
    </tr>
  `).join('');
}

// Module View Content Renderer
function renderModuleView() {
  const mod = localStorage.getItem('activeModule') || 'gate';
  const container = document.getElementById('module-content-area');
  const title = document.getElementById('module-page-title');

  if (session.isAdmin && document.getElementById('admin-publisher')) {
    document.getElementById('admin-publisher').classList.remove('hidden');
  }

  // Your custom image URL
  const qrImageSrc = "https://i.pinimg.com/736x/23/1b/29/231b2924fe792f31e306ab88ac330ec1.jpg";

  if (mod === 'gate') {
    title.innerText = "GATE Module";
    const userBranch = session.branch || "aids";
    const gateSyllabus = gateSyllabusByBranch[userBranch] || gateSyllabusByBranch.aids;

    container.innerHTML = `
      <div class="glass p-6 sm:p-8 rounded-2xl border border-blue-500/30 space-y-6">
        <div>
          <h2 class="text-2xl font-black text-white flex items-center gap-2">🎯 GATE 2027 — ${gateSyllabus.code}</h2>
          <p class="text-sm font-semibold text-blue-400 mt-1">Organizing Institute: ${gateSyllabus.organizer} — Official Department Syllabus</p>
        </div>

        <div class="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4">
          <h3 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-book-bookmark text-blue-400"></i> Official GATE 2027 ${gateSyllabus.code} Curriculum (Full 7 Sections)
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${gateSyllabus.sections.map(sec => `
              <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <h4 class="text-xs font-bold text-blue-400 mb-2 flex items-center gap-1.5">
                  <i class="fa-solid fa-list-check text-[10px]"></i> ${sec.name}
                </h4>
                <ul class="list-disc list-inside space-y-1 text-[11px] text-slate-300">
                  ${sec.topics.map(t => `<li>${t}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-slate-900/90 p-5 rounded-xl border border-slate-800">
            <h4 class="font-bold text-sm text-emerald-400 mb-3"><i class="fa-solid fa-check-circle mr-1"></i> With One Exam You Can:</h4>
            <ul class="text-xs text-slate-300 space-y-2">
              <li>🏛 Join IITs & IISc Bangalore</li>
              <li>🏛 Pursue M.Tech / Higher Studies</li>
              <li>💼 Get Direct PSU Opportunities</li>
              <li>🔬 Research Internships</li>
              <li>💰 Higher Salary Opportunities</li>
            </ul>
          </div>

          <div class="bg-slate-900/90 p-5 rounded-xl border border-slate-800">
            <h4 class="font-bold text-sm text-red-400 mb-3"><i class="fa-solid fa-times-circle mr-1"></i> Why Most Students Fail:</h4>
            <ul class="text-xs text-slate-300 space-y-2">
              <li>❌ No clear roadmap</li>
              <li>❌ Wrong or outdated resources</li>
              <li>❌ Lack of consistency & planning</li>
              <li>❌ No regular revision</li>
              <li>❌ Skipping PYQs (Previous Papers)</li>
            </ul>
          </div>

          <div class="bg-slate-900/90 p-5 rounded-xl border border-slate-800">
            <h4 class="font-bold text-sm text-blue-400 mb-3"><i class="fa-solid fa-star mr-1"></i> We Help You With:</h4>
            <ul class="text-xs text-slate-300 space-y-2">
              <li>✔ Complete GATE roadmap</li>
              <li>✔ Subject-wise strategy & study plans</li>
              <li>✔ Curated important resources</li>
              <li>✔ PYQ guidance & revision schedules</li>
              <li>✔ Motivation & time management</li>
            </ul>
          </div>
        </div>

        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center flex flex-col items-center justify-center">
          <h3 class="text-base font-bold text-white mb-1">Scan QR Code to Start</h3>
          <p class="text-xs text-slate-400 mb-4">Learn from IITs. Build your Future.</p>
          <img src="${qrImageSrc}" alt="GATE QR Scanner" class="w-44 h-44 rounded-xl border border-slate-700 shadow-lg object-contain bg-white p-2">
        </div>
      </div>
    `;
  } else if (mod === 'nptel') {
    title.innerText = "NPTEL Module";
    container.innerHTML = `
      <div class="glass p-6 sm:p-8 rounded-2xl border border-sky-500/30 space-y-6">
        <div>
          <h2 class="text-2xl font-black text-white flex items-center gap-2">📚 NPTEL Courses — Learn from IIT Professors</h2>
          <p class="text-sm text-sky-400 font-semibold mt-1">Enhance your core skills with certified NPTEL courses taught by IIT Bombay, Delhi, Madras, Kanpur, Kharagpur, and Roorkee.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-slate-900/90 p-5 rounded-xl border border-slate-800">
            <h4 class="font-bold text-sm text-sky-400 mb-3"><i class="fa-solid fa-certificate mr-1"></i> Key Benefits:</h4>
            <ul class="text-xs text-slate-300 space-y-2">
              <li>✔ Learn directly from world-class IIT professors</li>
              <li>✔ Earn valuable national certificates</li>
              <li>✔ Improve your resume & academic profile</li>
              <li>✔ Stand out during campus placements</li>
            </ul>
          </div>

          <div class="bg-slate-900/90 p-5 rounded-xl border border-slate-800">
            <h4 class="font-bold text-sm text-emerald-400 mb-3"><i class="fa-solid fa-compass mr-1"></i> How We Guide You:</h4>
            <ul class="text-xs text-slate-300 space-y-2">
              <li>✔ Which course to choose & semester selection</li>
              <li>✔ Complete exam registration guidance</li>
              <li>✔ Weekly planning & assignment strategy</li>
            </ul>
          </div>
        </div>

        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center flex flex-col items-center justify-center">
          <h3 class="text-base font-bold text-white mb-1">Scan QR Code</h3>
          <p class="text-xs text-slate-400 mb-4">Learn from IITs. Build your Future.</p>
          <img src="${qrImageSrc}" alt="NPTEL QR Scanner" class="w-44 h-44 rounded-xl border border-slate-700 shadow-lg object-contain bg-white p-2">
        </div>
      </div>
    `;
  } else if (mod === 'comm') {
    title.innerText = "Communication Skills Module";
    container.innerHTML = `
      <div class="glass p-6 sm:p-8 rounded-2xl border border-emerald-500/30 space-y-6">
        <div>
          <h2 class="text-2xl font-black text-white">🚀 Why Communication Matters More Than CGPA</h2>
          <p class="text-sm font-semibold text-emerald-400 mt-1">Your dream job starts with your voice.</p>
        </div>

        <div class="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
          <h4 class="font-bold text-xs text-slate-300 mb-3 uppercase tracking-wider">"Have you ever felt..."</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            <div>😶 You know the answer but stay silent in class?</div>
            <div>😓 You understand concepts but can't explain in English?</div>
            <div> deliberate You hesitate to speak during interviews?</div>
            <div>😟 You avoid introducing yourself due to lack of confidence?</div>
            <div>😕 You think "My English is not good enough"?</div>
            <div class="text-emerald-400 font-semibold">You're not alone! We start from the absolute basics.</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-slate-900/90 p-5 rounded-xl border border-slate-800">
            <h4 class="font-bold text-sm text-emerald-400 mb-3">What You'll Learn:</h4>
            <ul class="text-xs text-slate-300 space-y-1.5">
              <li>✔ Spoken English & Vocabulary</li>
              <li>✔ Interview Communication & HR Questions</li>
              <li>✔ Group Discussion Strategies</li>
              <li>✔ Public Speaking & Presentation Skills</li>
              <li>✔ Email Writing & LinkedIn Profile Building</li>
            </ul>
          </div>

          <div class="bg-slate-900/90 p-5 rounded-xl border border-slate-800">
            <h4 class="font-bold text-sm text-blue-400 mb-3">Imagine Yourself After The Course:</h4>
            <ul class="text-xs text-slate-300 space-y-2">
              <li>🎤 Giving seminars with complete confidence.</li>
              <li>💼 Cracking HR & Technical interviews.</li>
              <li>🌍 Talking with industry professionals smoothly.</li>
              <li>📈 Building a strong LinkedIn personal brand.</li>
            </ul>
          </div>
        </div>

        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center flex flex-col items-center justify-center">
          <h3 class="text-base font-bold text-white mb-1">Scan QR Code to Start</h3>
          <p class="text-xs text-slate-400 mb-4">Your dream job starts with your voice.</p>
          <img src="${qrImageSrc}" alt="Communication QR Scanner" class="w-44 h-44 rounded-xl border border-slate-700 shadow-lg object-contain bg-white p-2">
        </div>
      </div>
    `;
  }

  renderPublishedFiles(mod);
}

function publishAdminFile(e) {
  e.preventDefault();
  const mod = localStorage.getItem('activeModule') || 'gate';
  const title = document.getElementById('admin-doc-title').value;
  const fileInput = document.getElementById('admin-doc-file');
  const fileName = fileInput.files[0] ? fileInput.files[0].name : "Document.pdf";

  if (!moduleResources[mod]) moduleResources[mod] = [];
  moduleResources[mod].push({ title, fileName });

  localStorage.setItem('moduleResources', JSON.stringify(moduleResources));
  document.getElementById('admin-doc-title').value = '';
  fileInput.value = '';

  renderPublishedFiles(mod);
  alert(`Published "${title}" to ${mod.toUpperCase()} module successfully!`);
}

function renderPublishedFiles(mod) {
  const container = document.getElementById('resources-list');
  const files = moduleResources[mod] || [];

  if (files.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-500 italic">No files published for this module yet.</p>`;
  } else {
    container.innerHTML = files.map(f => `
      <div class="flex items-center justify-between p-3 bg-slate-950 border border-slate-800 rounded-xl">
        <div class="flex items-center gap-2 text-xs text-slate-200">
          <i class="fa-solid fa-file-pdf text-red-400 text-sm"></i>
          <span class="font-medium">${f.title}</span>
          <span class="text-[10px] text-slate-500">(${f.fileName})</span>
        </div>
        <a href="#" onclick="alert('Downloading: ${f.fileName}')" class="text-xs text-blue-400 hover:underline flex items-center gap-1"><i class="fa-solid fa-download"></i> Download</a>
      </div>
    `).join('');
  }
}