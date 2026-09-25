// Tools Data
const tools = [
    {
        id: 'percentage-calculator',
        name: 'Percentage Calculator',
        icon: '📊',
        description: 'Calculate percentages easily',
        category: 'calculator'
    },
    {
        id: 'age-calculator',
        name: 'Age Calculator',
        icon: '🎂',
        description: 'Calculate your exact age',
        category: 'calculator'
    },
    {
        id: 'bmi-calculator',
        name: 'BMI Calculator',
        icon: '⚖️',
        description: 'Calculate Body Mass Index',
        category: 'health'
    },
    {
        id: 'emi-calculator',
        name: 'EMI Calculator',
        icon: '💰',
        description: 'Calculate loan EMI',
        category: 'finance'
    },
    {
        id: 'gst-calculator',
        name: 'GST Calculator',
        icon: '🧾',
        description: 'Calculate GST amounts',
        category: 'finance'
    },
    {
        id: 'discount-calculator',
        name: 'Discount Calculator',
        icon: '🏷️',
        description: 'Calculate discount prices',
        category: 'calculator'
    },
    {
        id: 'cgpa-calculator',
        name: 'CGPA Calculator',
        icon: '📚',
        description: 'Calculate CGPA and percentage',
        category: 'education'
    },
    {
        id: 'word-counter',
        name: 'Word Counter',
        icon: '📝',
        description: 'Count words and characters',
        category: 'text'
    },
    {
        id: 'case-converter',
        name: 'Case Converter',
        icon: '🔤',
        description: 'Convert text case',
        category: 'text'
    },
    {
        id: 'duplicate-remover',
        name: 'Duplicate Line Remover',
        icon: '🗑️',
        description: 'Remove duplicate lines',
        category: 'text'
    },
    {
        id: 'image-compressor',
        name: 'Image Compressor',
        icon: '📷',
        description: 'Compress images to target size (20KB-500KB)',
        category: 'image',
        url: 'image-compressor.html'
    },
    {
        id: 'jpg-to-pdf',
        name: 'JPG to PDF',
        icon: '📄',
        description: 'Convert JPG images to PDF document',
        category: 'image',
        url: 'jpg-to-pdf.html'
    },
    
    {
        id: 'image-resizer',
        name: 'Image Resizer',
        icon: '🖼️',
        description: 'Resize images easily',
        category: 'image'
    },
    {
        id: 'jpg-to-png',
        name: 'JPG to PNG',
        icon: '🔄',
        description: 'Convert JPG to PNG',
        category: 'image'
    },
    {
        id: 'png-to-jpg',
        name: 'PNG to JPG',
        icon: '🔄',
        description: 'Convert PNG to JPG',
        category: 'image'
    },
    {
        id: 'qr-generator',
        name: 'QR Code Generator',
        icon: '📱',
        description: 'Generate QR codes',
        category: 'image'
    },
    {
        id: 'unit-converter',
        name: 'Unit Converter',
        icon: '📏',
        description: 'Convert units easily',
        category: 'converter'
    },
    {
        id: 'study-time',
        name: 'Study Time Calculator',
        icon: '⏰',
        description: 'Calculate study time',
        category: 'education'
    },
    {
        id: 'attendance-calculator',
        name: 'Attendance Calculator',
        icon: '📅',
        description: 'Calculate attendance percentage',
        category: 'education'
    },
   
    {
        id: 'speed-calculator',
        name: 'Speed Calculator',
        icon: '⏱️',
        description: 'Calculate speed and time',
        category: 'calculator'
    }
];

// Guides Data
const guides = [
    {
        id: 'cgpa-to-percentage',
        title: 'How to Convert CGPA to Percentage?',
        description: 'Learn the simple formula to convert your CGPA to percentage for job applications and higher studies.',
        tag: 'Education'
    },
    {
        id: 'reduce-image-size',
        title: 'How to Reduce Image Size to Target KB?',
        description: 'Step-by-step guide to compress images to specific sizes like 20KB, 50KB, 100KB for forms and documents.',
        tag: 'Image'
    },
    {
        id: 'calculate-bmi',
        title: 'How to Calculate BMI Correctly?',
        description: 'Understand BMI calculation and what your BMI means for your health.',
        tag: 'Health'
    },
    {
        id: 'gst-calculation',
        title: 'How to Calculate GST?',
        description: 'Simple guide to calculate GST for your business transactions and invoices.',
        tag: 'Finance'
    },
    {
        id: 'age-calculation',
        title: 'How to Calculate Exact Age?',
        description: 'Learn to calculate your precise age in years, months, and days.',
        tag: 'General'
    },
    {
        id: 'word-count-tips',
        title: 'Tips for Accurate Word Count',
        description: 'Best practices for counting words in documents and essays.',
        tag: 'Writing'
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderTools();
    renderGuides();
    setupSearch();
    setupModal();
});

// Render Tools
function renderTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = tools.map(tool => `
        <div class="tool-card" data-tool-id="${tool.id}">
            <div class="tool-icon">${tool.icon}</div>
            <div class="tool-name">${tool.name}</div>
            <div class="tool-description">${tool.description}</div>
        </div>
    `).join('');

    // Add click listeners
    document.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('click', function() {
            const toolId = this.getAttribute('data-tool-id');
            const tool = tools.find(t => t.id === toolId);
            if (tool && tool.url) {
                window.location.href = tool.url;
            } else {
                openTool(toolId);
            }
        });
    });
}

// Render Guides
function renderGuides() {
    const guidesGrid = document.getElementById('guidesGrid');
    guidesGrid.innerHTML = guides.map(guide => `
        <div class="guide-card" data-guide-id="${guide.id}">
            <div class="guide-title">${guide.title}</div>
            <div class="guide-description">${guide.description}</div>
            <span class="guide-tag">${guide.tag}</span>
        </div>
    `).join('');

    // Add click listeners
    document.querySelectorAll('.guide-card').forEach(card => {
        card.addEventListener('click', function() {
            const guideId = this.getAttribute('data-guide-id');
            openGuide(guideId);
        });
    });
}

// Setup Search
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        filterContent(query);
    });

    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        filterContent(query);
    });
}

function filterContent(query) {
    // Filter tools
    document.querySelectorAll('.tool-card').forEach(card => {
        const toolName = card.querySelector('.tool-name').textContent.toLowerCase();
        const toolDesc = card.querySelector('.tool-description').textContent.toLowerCase();
        if (toolName.includes(query) || toolDesc.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Filter guides
    document.querySelectorAll('.guide-card').forEach(card => {
        const guideTitle = card.querySelector('.guide-title').textContent.toLowerCase();
        const guideDesc = card.querySelector('.guide-description').textContent.toLowerCase();
        if (guideTitle.includes(query) || guideDesc.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Setup Modal
function setupModal() {
    const modal = document.getElementById('toolModal');
    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Open Tool
function openTool(toolId) {
    const modal = document.getElementById('toolModal');
    const toolContent = document.getElementById('toolContent');
    const tool = tools.find(t => t.id === toolId);

    if (tool) {
        toolContent.innerHTML = getToolInterface(tool);
        modal.style.display = 'block';
        setupToolFunctionality(toolId);
    }
}

// Get Tool Interface
function getToolInterface(tool) {
    switch(tool.id) {
        case 'percentage-calculator':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>Enter your amount to calculate percentage of</label>
                        <input type="number" id="percentValue" placeholder="Enter total value">
                    </div>
                    <div class="form-group">
                    <label>What is the percentage %?</label>
                        <input type="number" id="totalValue" placeholder="Enter percentage value">
                    </div>
                    <div class="form-group">
                        <button onclick="calculatePercentage()">Calculate</button>
                    </div>
                    <div class="result" id="percentageResult">
                        <h4>Result:</h4>
                        <div class="result-value" id="percentageOutput"></div>
                        <div id="percentageDownload"></div>
                    </div>
                </div>
            `;
        case 'age-calculator':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label> Enter Date of Birth</label>
                        <input type="date" id="birthDate">
                    </div>
                    <div class="form-group">
                        <button onclick="calculateAge()">Calculate Age</button>
                    </div>
                    <div class="result" id="ageResult">
                        <h4>Your Age:</h4>
                        <div class="result-value" id="ageOutput"></div>
                        <div id="ageDownload"></div>
                    </div>
                </div>
            `;
        case 'bmi-calculator':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>Weight (kg)</label>
                        <input type="number" id="weight" placeholder="Enter weight">
                    </div>
                    <div class="form-group">
                        <label>Height (cm)</label>
                        <input type="number" id="height" placeholder="Enter height">
                    </div>
                    <div class="form-group">
                        <button onclick="calculateBMI()">Calculate BMI</button>
                    </div>
                    <div class="result" id="bmiResult">
                        <h4>Your BMI:</h4>
                        <div class="result-value" id="bmiOutput"></div>
                        <div id="bmiCategory"></div>
                        <div id="bmiDownload"></div>
                    </div>
                </div>
            `;
        case 'emi-calculator':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>Calculate your Loan Amount (₹)</label>
                        <input type="number" id="loanAmount" placeholder="Enter loan amount">
                    </div>
                    <div class="form-group">
                        <label>Interest Rate (% per year)</label>
                        <input type="number" id="interestRate" placeholder="Enter interest rate">
                    </div>
                    <div class="form-group">
                        <label>Loan Term (months)</label>
                        <input type="number" id="loanTerm" placeholder="Enter loan term">
                    </div>
                    <div class="form-group">
                        <button onclick="calculateEMI()">Calculate EMI</button>
                    </div>
                    <div class="result" id="emiResult">
                        <h4>Your Monthly EMI:</h4>
                        <div class="result-value" id="emiOutput"></div>
                        <div id="emiDownload"></div>
                    </div>
                </div>
            `;
        case 'gst-calculator':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>Calculate your GST Amount (₹)</label>
                        <input type="number" id="gstAmount" placeholder="Enter amount">
                    </div>
                    <div class="form-group">
                        <label>GST Rate (%)</label>
                        <select id="gstRate">
                            <option value="5">5%</option>
                            <option value="12">12%</option>
                            <option value="18" selected>18%</option>
                            <option value="28">28%</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <button onclick="calculateGST()">Calculate GST</button>
                    </div>
                    <div class="result" id="gstResult">
                        <h4>GST Amount:</h4>
                        <div class="result-value" id="gstOutput"></div>
                        <div>Total Amount: <span id="totalWithGst"></span></div>
                        <div id="gstDownload"></div>
                    </div>
                </div>
            `;
        case 'discount-calculator':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>Calculate Discount (₹)</label>
                        <input type="number" id="originalPrice" placeholder="Enter original price">
                    </div>
                    <div class="form-group">
                        <label>Discount (%)</label>
                        <input type="number" id="discountPercent" placeholder="Enter discount percentage">
                    </div>
                    <div class="form-group">
                        <button onclick="calculateDiscount()">Calculate Discount</button>
                    </div>
                    <div class="result" id="discountResult">
                        <h4>You Save:</h4>
                        <div class="result-value" id="discountOutput"></div>
                        <div>Final Price: <span id="finalPrice"></span></div>
                        <div id="discountDownload"></div>
                    </div>
                </div>
            `;
        case 'cgpa-calculator':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>CGPA (out of 10)</label>
                        <input type="number" id="cgpa" step="0.01" placeholder="Enter CGPA">
                    </div>
                    <div class="form-group">
                        <button onclick="calculateCGPA()">Convert to Percentage</button>
                    </div>
                    <div class="result" id="cgpaResult">
                        <h4>Percentage:</h4>
                        <div class="result-value" id="cgpaOutput"></div>
                        <div id="cgpaDownload"></div>
                    </div>
                </div>
            `;
        case 'word-counter':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>Enter your text:</label>
                        <textarea id="wordCountText" rows="6" placeholder="Paste your text here..."></textarea>
                    </div>
                    <div class="form-group">
                        <button onclick="countWords()">Count Words</button>
                    </div>
                    <div class="result" id="wordCountResult">
                        <h4>Results:</h4>
                        <div>Words: <span class="result-value" id="wordCountOutput"></span></div>
                        <div>Characters: <span class="result-value" id="charCountOutput"></span></div>
                        <div id="wordCountDownload"></div>
                    </div>
                </div>
            `;
        case 'case-converter':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>Enter text:</label>
                        <textarea id="caseText" rows="4" placeholder="Enter text to convert..."></textarea>
                    </div>
                    <div class="form-group">
                        <button onclick="convertToUpperCase()">UPPERCASE</button>
                        <button onclick="convertToLowerCase()">lowercase</button>
                        <button onclick="convertToTitleCase()">Title Case</button>
                    </div>
                    <div class="result" id="caseResult">
                        <h4>Converted Text:</h4>
                        <div id="caseOutput"></div>
                        <div id="caseDownload"></div>
                    </div>
                </div>
            `;
        case 'duplicate-remover':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>Enter lines (one per line):</label>
                        <textarea id="duplicateText" rows="6" placeholder="Enter text here..."></textarea>
                    </div>
                    <div class="form-group">
                        <button onclick="removeDuplicates()">Remove Duplicates</button>
                    </div>
                    <div class="result" id="duplicateResult">
                        <h4>Result:</h4>
                        <textarea id="duplicateOutput" rows="6" readonly></textarea>
                        <div id="duplicateDownload"></div>
                    </div>
                </div>
            `;
        case 'image-compressor':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>Upload Image:</label>
                        <input type="file" id="imageInput" accept="image/*">
                    </div>
                    <div class="form-group">
                        <label>Target Size:</label>
                        <select id="targetSize">
                            <option value="20">20 KB</option>
                            <option value="50">50 KB</option>
                            <option value="100" selected>100 KB</option>
                            <option value="200">200 KB</option>
                            <option value="500">500 KB</option>
                            <option value="custom">Custom</option>
                        </select>
                    </div>
                    <div class="form-group" id="customSizeGroup" style="display: none;">
                        <label>Custom Size (KB):</label>
                        <input type="number" id="customSize" placeholder="Enter target size in KB">
                    </div>
                    <div class="form-group">
                        <label>Output Format:</label>
                        <select id="outputFormat">
                            <option value="jpeg">JPEG</option>
                            <option value="png">PNG</option>
                            <option value="webp">WebP</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Quality (0-100):</label>
                        <input type="range" id="quality" min="0" max="100" value="80">
                        <span id="qualityValue">80%</span>
                    </div>
                    <div class="form-group">
                        <button onclick="compressImage()">Compress Image</button>
                    </div>
                    <div class="result" id="compressResult">
                        <h4>Compressed Image:</h4>
                        <img id="compressedImage" style="max-width: 100%; display: none;">
                        <div id="compressInfo"></div>
                        <div id="compressDownload"></div>
                    </div>
                </div>
            `;
        case 'image-resizer':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>Upload Image:</label>
                        <input type="file" id="resizeInput" accept="image/*">
                    </div>
                    <div class="form-group">
                        <label>Width (px):</label>
                        <input type="number" id="resizeWidth" placeholder="Enter width">
                    </div>
                    <div class="form-group">
                        <label>Height (px):</label>
                        <input type="number" id="resizeHeight" placeholder="Enter height">
                    </div>
                    <div class="form-group">
                        <button onclick="resizeImage()">Resize Image</button>
                    </div>
                    <div class="result" id="resizeResult">
                        <h4>Resized Image:</h4>
                        <img id="resizedImage" style="max-width: 100%; display: none;">
                        <div id="resizeDownload"></div>
                    </div>
                </div>
            `;
        case 'jpg-to-png':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>Upload JPG Image:</label>
                        <input type="file" id="jpgInput" accept="image/jpeg">
                    </div>
                    <div class="form-group">
                        <button onclick="convertJpgToPng()">Convert to PNG</button>
                    </div>
                    <div class="result" id="jpgResult">
                        <h4>PNG Image:</h4>
                        <img id="pngImage" style="max-width: 100%; display: none;">
                        <div id="pngDownload"></div>
                    </div>
                </div>
            `;
        case 'png-to-jpg':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>Upload PNG Image:</label>
                        <input type="file" id="pngInput" accept="image/png">
                    </div>
                    <div class="form-group">
                        <button onclick="convertPngToJpg()">Convert to JPG</button>
                    </div>
                    <div class="result" id="pngResult">
                        <h4>JPG Image:</h4>
                        <img id="jpgImage" style="max-width: 100%; display: none;">
                        <div id="jpgDownload"></div>
                    </div>
                </div>
            `;
        case 'qr-generator':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>Enter URL or Text:</label>
                        <input type="text" id="qrText" placeholder="Enter URL or text">
                    </div>
                    <div class="form-group">
                        <button onclick="generateQR()">Generate QR Code</button>
                    </div>
                    <div class="result" id="qrResult">
                        <h4>QR Code:</h4>
                        <div id="qrOutput" style="text-align: center;"></div>
                        <div id="qrDownload"></div>
                    </div>
                </div>
            `;
        case 'unit-converter':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>Conversion Type:</label>
                        <select id="conversionType">
                            <option value="length">Length</option>
                            <option value="weight">Weight</option>
                            <option value="temperature">Temperature</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>From:</label>
                        <input type="number" id="unitFrom" placeholder="Enter value">
                        <select id="unitFromType">
                            <option value="m">Meters</option>
                            <option value="km">Kilometers</option>
                            <option value="cm">Centimeters</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>To:</label>
                        <select id="unitToType">
                            <option value="m">Meters</option>
                            <option value="km">Kilometers</option>
                            <option value="cm">Centimeters</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <button onclick="convertUnit()">Convert</button>
                    </div>
                    <div class="result" id="unitResult">
                        <h4>Result:</h4>
                        <div class="result-value" id="unitOutput"></div>
                        <div id="unitDownload"></div>
                    </div>
                </div>
            `;
        case 'study-time':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>Total Chapters/Topics:</label>
                        <input type="number" id="totalChapters" placeholder="Enter total chapters">
                    </div>
                    <div class="form-group">
                        <label>Days Available:</label>
                        <input type="number" id="daysAvailable" placeholder="Enter days available">
                    </div>
                    <div class="form-group">
                        <label>Hours Per Day:</label>
                        <input type="number" id="hoursPerDay" placeholder="Enter hours per day">
                    </div>
                    <div class="form-group">
                        <button onclick="calculateStudyTime()">Calculate Study Plan</button>
                    </div>
                    <div class="result" id="studyResult">
                        <h4>Study Plan:</h4>
                        <div id="studyOutput"></div>
                        <div id="studyDownload"></div>
                    </div>
                </div>
            `;
        case 'attendance-calculator':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>Total Classes:</label>
                        <input type="number" id="totalClasses" placeholder="Enter total classes">
                    </div>
                    <div class="form-group">
                        <label>Attended Classes:</label>
                        <input type="number" id="attendedClasses" placeholder="Enter attended classes">
                    </div>
                    <div class="form-group">
                        <button onclick="calculateAttendance()">Calculate Attendance</button>
                    </div>
                    <div class="result" id="attendanceResult">
                        <h4>Attendance Percentage:</h4>
                        <div class="result-value" id="attendanceOutput"></div>
                        <div id="attendanceStatus"></div>
                        <div id="attendanceDownload"></div>
                    </div>
                </div>
            `;
        case 'speed-calculator':
            return `
                <div class="tool-interface">
                    <h3>${tool.icon} ${tool.name}</h3>
                    <div class="form-group">
                        <label>Distance (km):</label>
                        <input type="number" id="distance" placeholder="Enter distance">
                    </div>
                    <div class="form-group">
                        <label>Time (hours):</label>
                        <input type="number" id="time" placeholder="Enter time">
                    </div>
                    <div class="form-group">
                        <button onclick="calculateSpeed()">Calculate Speed</button>
                    </div>
                    <div class="result" id="speedResult">
                        <h4>Speed:</h4>
                        <div class="result-value" id="speedOutput"></div>
                        <div id="speedDownload"></div>
                    </div>
                </div>
            `;
        default:
            return `<div class="tool-interface"><h3>${tool.name}</h3><p>Tool interface coming soon...</p></div>`;
    }
}

// Setup Tool Functionality
function setupToolFunctionality(toolId) {
    // Setup quality slider for image compressor
    if (toolId === 'image-compressor') {
        const qualitySlider = document.getElementById('quality');
        const qualityValue = document.getElementById('qualityValue');
        qualitySlider.addEventListener('input', function() {
            qualityValue.textContent = this.value + '%';
        });

        // Setup target size dropdown
        const targetSizeSelect = document.getElementById('targetSize');
        const customSizeGroup = document.getElementById('customSizeGroup');
        targetSizeSelect.addEventListener('change', function() {
            if (this.value === 'custom') {
                customSizeGroup.style.display = 'block';
            } else {
                customSizeGroup.style.display = 'none';
            }
        });
    }
}

// Tool Functions
function calculatePercentage() {
    const percent = parseFloat(document.getElementById('percentValue').value);
    const total = parseFloat(document.getElementById('totalValue').value);

    if (!isNaN(percent) && !isNaN(total)) {
        const result = (percent / 100) * total;
        document.getElementById('percentageOutput').textContent = result.toFixed(2);
        document.getElementById('percentageResult').classList.add('show');

        document.getElementById('percentageDownload').innerHTML = `
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
                <button onclick="copyPercentageResult()" class="download-btn">
                    Copy Result
                </button>
                <button onclick="resetPercentageCalculator()" class="download-btn" style="background: #6c757d;">
                    Calculate Another
                </button>
            </div>
        `;
    }
}

function copyPercentageResult() {
    const result = `Result: ${document.getElementById('percentageOutput').textContent}`;
    navigator.clipboard.writeText(result).then(() => {
        alert('Result copied to clipboard!');
    });
}

function resetPercentageCalculator() {
    document.getElementById('percentValue').value = '';
    document.getElementById('totalValue').value = '';
    document.getElementById('percentageOutput').textContent = '';
    document.getElementById('percentageDownload').innerHTML = '';
    document.getElementById('percentageResult').classList.remove('show');
}

function calculateAge() {
    const birthDate = new Date(document.getElementById('birthDate').value);
    const today = new Date();

    if (!isNaN(birthDate.getTime())) {
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        document.getElementById('ageOutput').textContent = `${years} years, ${months} months, ${days} days`;
        document.getElementById('ageResult').classList.add('show');

        document.getElementById('ageDownload').innerHTML = `
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
                <button onclick="copyAgeResult()" class="download-btn">
                    Copy Result
                </button>
                <button onclick="resetAgeCalculator()" class="download-btn" style="background: #6c757d;">
                    Calculate Another
                </button>
            </div>
        `;
    }
}

function copyAgeResult() {
    const result = `Age: ${document.getElementById('ageOutput').textContent}`;
    navigator.clipboard.writeText(result).then(() => {
        alert('Result copied to clipboard!');
    });
}

function resetAgeCalculator() {
    document.getElementById('birthDate').value = '';
    document.getElementById('ageOutput').textContent = '';
    document.getElementById('ageDownload').innerHTML = '';
    document.getElementById('ageResult').classList.remove('show');
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const bmi = weight / (height * height);
        document.getElementById('bmiOutput').textContent = bmi.toFixed(2);

        let category = '';
        if (bmi < 18.5) category = 'Underweight';
        else if (bmi < 25) category = 'Normal weight';
        else if (bmi < 30) category = 'Overweight';
        else category = 'Obese';

        document.getElementById('bmiCategory').textContent = `Category: ${category}`;
        document.getElementById('bmiResult').classList.add('show');

        document.getElementById('bmiDownload').innerHTML = `
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
                <button onclick="copyBMIResult()" class="download-btn">
                    Copy Result
                </button>
                <button onclick="resetBMICalculator()" class="download-btn" style="background: #6c757d;">
                    Calculate Another
                </button>
            </div>
        `;
    }
}

function copyBMIResult() {
    const result = `BMI: ${document.getElementById('bmiOutput').textContent}\n${document.getElementById('bmiCategory').textContent}`;
    navigator.clipboard.writeText(result).then(() => {
        alert('Result copied to clipboard!');
    });
}

function resetBMICalculator() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('bmiOutput').textContent = '';
    document.getElementById('bmiCategory').textContent = '';
    document.getElementById('bmiDownload').innerHTML = '';
    document.getElementById('bmiResult').classList.remove('show');
}

function calculateEMI() {
    const principal = parseFloat(document.getElementById('loanAmount').value);
    const rate = parseFloat(document.getElementById('interestRate').value) / 12 / 100;
    const months = parseFloat(document.getElementById('loanTerm').value);

    if (!isNaN(principal) && !isNaN(rate) && !isNaN(months)) {
        const emi = principal * rate * Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1);
        document.getElementById('emiOutput').textContent = '₹' + emi.toFixed(2);
        document.getElementById('emiResult').classList.add('show');

        document.getElementById('emiDownload').innerHTML = `
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
                <button onclick="copyEMIResult()" class="download-btn">
                    Copy Result
                </button>
                <button onclick="resetEMICalculator()" class="download-btn" style="background: #6c757d;">
                    Calculate Another
                </button>
            </div>
        `;
    }
}

function copyEMIResult() {
    const result = `Monthly EMI: ${document.getElementById('emiOutput').textContent}`;
    navigator.clipboard.writeText(result).then(() => {
        alert('Result copied to clipboard!');
    });
}

function resetEMICalculator() {
    document.getElementById('loanAmount').value = '';
    document.getElementById('interestRate').value = '';
    document.getElementById('loanTerm').value = '';
    document.getElementById('emiOutput').textContent = '';
    document.getElementById('emiDownload').innerHTML = '';
    document.getElementById('emiResult').classList.remove('show');
}

function calculateGST() {
    const amount = parseFloat(document.getElementById('gstAmount').value);
    const rate = parseFloat(document.getElementById('gstRate').value);

    if (!isNaN(amount) && !isNaN(rate)) {
        const gst = (amount * rate) / 100;
        const total = amount + gst;
        document.getElementById('gstOutput').textContent = '₹' + gst.toFixed(2);
        document.getElementById('totalWithGst').textContent = '₹' + total.toFixed(2);
        document.getElementById('gstResult').classList.add('show');

        document.getElementById('gstDownload').innerHTML = `
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
                <button onclick="copyGSTResult()" class="download-btn">
                    Copy Result
                </button>
                <button onclick="resetGSTCalculator()" class="download-btn" style="background: #6c757d;">
                    Calculate Another
                </button>
            </div>
        `;
    }
}

function copyGSTResult() {
    const result = `GST Amount: ${document.getElementById('gstOutput').textContent}\nTotal Amount: ${document.getElementById('totalWithGst').textContent}`;
    navigator.clipboard.writeText(result).then(() => {
        alert('Result copied to clipboard!');
    });
}

function resetGSTCalculator() {
    document.getElementById('gstAmount').value = '';
    document.getElementById('gstOutput').textContent = '';
    document.getElementById('totalWithGst').textContent = '';
    document.getElementById('gstDownload').innerHTML = '';
    document.getElementById('gstResult').classList.remove('show');
}

function calculateDiscount() {
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    const discountPercent = parseFloat(document.getElementById('discountPercent').value);

    if (!isNaN(originalPrice) && !isNaN(discountPercent)) {
        const discount = (originalPrice * discountPercent) / 100;
        const finalPrice = originalPrice - discount;
        document.getElementById('discountOutput').textContent = '₹' + discount.toFixed(2);
        document.getElementById('finalPrice').textContent = '₹' + finalPrice.toFixed(2);
        document.getElementById('discountResult').classList.add('show');

        document.getElementById('discountDownload').innerHTML = `
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
                <button onclick="copyDiscountResult()" class="download-btn">
                    Copy Result
                </button>
                <button onclick="resetDiscountCalculator()" class="download-btn" style="background: #6c757d;">
                    Calculate Another
                </button>
            </div>
        `;
    }
}

function copyDiscountResult() {
    const result = `You Save: ${document.getElementById('discountOutput').textContent}\nFinal Price: ${document.getElementById('finalPrice').textContent}`;
    navigator.clipboard.writeText(result).then(() => {
        alert('Result copied to clipboard!');
    });
}

function resetDiscountCalculator() {
    document.getElementById('originalPrice').value = '';
    document.getElementById('discountPercent').value = '';
    document.getElementById('discountOutput').textContent = '';
    document.getElementById('finalPrice').textContent = '';
    document.getElementById('discountDownload').innerHTML = '';
    document.getElementById('discountResult').classList.remove('show');
}

function calculateCGPA() {
    const cgpa = parseFloat(document.getElementById('cgpa').value);

    if (!isNaN(cgpa)) {
        const percentage = cgpa * 9.5;
        document.getElementById('cgpaOutput').textContent = percentage.toFixed(2) + '%';
        document.getElementById('cgpaResult').classList.add('show');

        document.getElementById('cgpaDownload').innerHTML = `
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
                <button onclick="copyCGPAResult()" class="download-btn">
                    Copy Result
                </button>
                <button onclick="resetCGPACalculator()" class="download-btn" style="background: #6c757d;">
                    Convert Another
                </button>
            </div>
        `;
    }
}

function copyCGPAResult() {
    const result = `CGPA: ${document.getElementById('cgpa').value}\nPercentage: ${document.getElementById('cgpaOutput').textContent}`;
    navigator.clipboard.writeText(result).then(() => {
        alert('Result copied to clipboard!');
    });
}

function resetCGPACalculator() {
    document.getElementById('cgpa').value = '';
    document.getElementById('cgpaOutput').textContent = '';
    document.getElementById('cgpaDownload').innerHTML = '';
    document.getElementById('cgpaResult').classList.remove('show');
}

function countWords() {
    const text = document.getElementById('wordCountText').value;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const chars = text.length;

    document.getElementById('wordCountOutput').textContent = words.length;
    document.getElementById('charCountOutput').textContent = chars;
    document.getElementById('wordCountResult').classList.add('show');

    // Add copy button
    document.getElementById('wordCountDownload').innerHTML = `
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
            <button onclick="copyText()" class="download-btn">
                Copy Text
            </button>
            <button onclick="resetWordCounter()" class="download-btn" style="background: #6c757d;">
                Count Another
            </button>
        </div>
    `;
}

function copyText() {
    const text = document.getElementById('wordCountText').value;
    navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard!');
    });
}

function resetWordCounter() {
    document.getElementById('wordCountText').value = '';
    document.getElementById('wordCountOutput').textContent = '';
    document.getElementById('charCountOutput').textContent = '';
    document.getElementById('wordCountDownload').innerHTML = '';
    document.getElementById('wordCountResult').classList.remove('show');
}

function convertToUpperCase() {
    const text = document.getElementById('caseText').value;
    document.getElementById('caseOutput').textContent = text.toUpperCase();
    document.getElementById('caseResult').classList.add('show');
    addCaseConverterButtons(text.toUpperCase());
}

function convertToLowerCase() {
    const text = document.getElementById('caseText').value;
    document.getElementById('caseOutput').textContent = text.toLowerCase();
    document.getElementById('caseResult').classList.add('show');
    addCaseConverterButtons(text.toLowerCase());
}

function convertToTitleCase() {
    const text = document.getElementById('caseText').value;
    const titleCase = text.toLowerCase().split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    document.getElementById('caseOutput').textContent = titleCase;
    document.getElementById('caseResult').classList.add('show');
    addCaseConverterButtons(titleCase);
}

function addCaseConverterButtons(convertedText) {
    const blob = new Blob([convertedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    document.getElementById('caseDownload').innerHTML = `
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
            <a href="${url}" download="converted_text.txt" class="download-btn">
                Download Text
            </a>
            <button onclick="copyConvertedText()" class="download-btn">
                Copy Text
            </button>
            <button onclick="resetCaseConverter()" class="download-btn" style="background: #6c757d;">
                Convert Another
            </button>
        </div>
    `;
}

function copyConvertedText() {
    const text = document.getElementById('caseOutput').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard!');
    });
}

function resetCaseConverter() {
    document.getElementById('caseText').value = '';
    document.getElementById('caseOutput').textContent = '';
    document.getElementById('caseDownload').innerHTML = '';
    document.getElementById('caseResult').classList.remove('show');
}

function removeDuplicates() {
    const text = document.getElementById('duplicateText').value;
    const lines = text.split('\n');
    const uniqueLines = [...new Set(lines)];
    document.getElementById('duplicateOutput').value = uniqueLines.join('\n');
    document.getElementById('duplicateResult').classList.add('show');

    // Add download button
    const blob = new Blob([uniqueLines.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    document.getElementById('duplicateDownload').innerHTML = `
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
            <a href="${url}" download="unique_lines.txt" class="download-btn">
                Download Text
            </a>
            <button onclick="resetDuplicateRemover()" class="download-btn" style="background: #6c757d;">
                Process Another
            </button>
        </div>
    `;
}

function resetDuplicateRemover() {
    document.getElementById('duplicateText').value = '';
    document.getElementById('duplicateOutput').value = '';
    document.getElementById('duplicateDownload').innerHTML = '';
    document.getElementById('duplicateResult').classList.remove('show');
}

function compressImage() {
    const input = document.getElementById('imageInput');
    const targetSizeSelect = document.getElementById('targetSize');
    const customSize = parseFloat(document.getElementById('customSize').value);
    const outputFormat = document.getElementById('outputFormat').value;
    const quality = parseInt(document.getElementById('quality').value) / 100;

    // Determine target size in KB
    let targetKB;
    if (targetSizeSelect.value === 'custom') {
        targetKB = customSize;
    } else {
        targetKB = parseFloat(targetSizeSelect.value);
    }

    if (input.files && input.files[0] && targetKB) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                let currentQuality = quality;
                let canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                let compressedDataUrl = canvas.toDataURL(`image/${outputFormat}`, currentQuality);
                let compressedSize = Math.round(compressedDataUrl.length * 0.75);
                const targetBytes = targetKB * 1024;

                // If file is still too large, reduce quality gradually
                let attempts = 0;
                const maxAttempts = 20;

                while (compressedSize > targetBytes && currentQuality > 0.1 && attempts < maxAttempts) {
                    currentQuality -= 0.05;
                    canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    compressedDataUrl = canvas.toDataURL(`image/${outputFormat}`, currentQuality);
                    compressedSize = Math.round(compressedDataUrl.length * 0.75);
                    attempts++;
                }

                // If still too large, reduce dimensions
                if (compressedSize > targetBytes) {
                    let scale = 0.9;
                    attempts = 0;
                    while (compressedSize > targetBytes && scale > 0.1 && attempts < maxAttempts) {
                        canvas = document.createElement('canvas');
                        canvas.width = Math.round(img.width * scale);
                        canvas.height = Math.round(img.height * scale);
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                        compressedDataUrl = canvas.toDataURL(`image/${outputFormat}`, currentQuality);
                        compressedSize = Math.round(compressedDataUrl.length * 0.75);
                        scale -= 0.1;
                        attempts++;
                    }
                }

                const compressedImage = document.getElementById('compressedImage');
                compressedImage.src = compressedDataUrl;
                compressedImage.style.display = 'block';

                const originalSize = input.files[0].size;
                const savings = Math.round((1 - compressedSize / originalSize) * 100);

                document.getElementById('compressInfo').innerHTML = `
                    Original: ${(originalSize / 1024).toFixed(2)} KB<br>
                    Compressed: ${(compressedSize / 1024).toFixed(2)} KB<br>
                    Target: ${targetKB} KB<br>
                    Savings: ${savings}%<br>
                    Final Quality: ${(currentQuality * 100).toFixed(0)}%<br>
                    Format: ${outputFormat.toUpperCase()}
                `;

                // Add download buttons
                const extension = outputFormat === 'jpeg' ? 'jpg' : outputFormat;
                document.getElementById('compressDownload').innerHTML = `
                    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
                        <a href="${compressedDataUrl}" download="compressed.${extension}" class="download-btn">
                            Download ${outputFormat.toUpperCase()}
                        </a>
                        <button onclick="resetImageCompressor()" class="download-btn" style="background: #6c757d;">
                            Convert Another
                        </button>
                    </div>
                `;

                document.getElementById('compressResult').classList.add('show');
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function resetImageCompressor() {
    document.getElementById('imageInput').value = '';
    document.getElementById('compressedImage').style.display = 'none';
    document.getElementById('compressInfo').innerHTML = '';
    document.getElementById('compressDownload').innerHTML = '';
    document.getElementById('compressResult').classList.remove('show');
}

function resizeImage() {
    const input = document.getElementById('resizeInput');
    const width = parseInt(document.getElementById('resizeWidth').value);
    const height = parseInt(document.getElementById('resizeHeight').value);

    if (input.files && input.files[0] && width && height) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                const resizedDataUrl = canvas.toDataURL('image/jpeg');
                const resizedImage = document.getElementById('resizedImage');
                resizedImage.src = resizedDataUrl;
                resizedImage.style.display = 'block';

                // Add download buttons
                document.getElementById('resizeDownload').innerHTML = `
                    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
                        <a href="${resizedDataUrl}" download="resized.jpg" class="download-btn">
                            Download JPG
                        </a>
                        <button onclick="resetImageResizer()" class="download-btn" style="background: #6c757d;">
                            Resize Another
                        </button>
                    </div>
                `;
                document.getElementById('resizeResult').classList.add('show');
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function resetImageResizer() {
    document.getElementById('resizeInput').value = '';
    document.getElementById('resizeWidth').value = '';
    document.getElementById('resizeHeight').value = '';
    document.getElementById('resizedImage').style.display = 'none';
    document.getElementById('resizeDownload').innerHTML = '';
    document.getElementById('resizeResult').classList.remove('show');
}

function convertJpgToPng() {
    const input = document.getElementById('jpgInput');

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                const pngDataUrl = canvas.toDataURL('image/png');
                const pngImage = document.getElementById('pngImage');
                pngImage.src = pngDataUrl;
                pngImage.style.display = 'block';

                document.getElementById('pngDownload').innerHTML = `
                    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
                        <a href="${pngDataUrl}" download="converted.png" class="download-btn">
                            Download PNG
                        </a>
                        <button onclick="resetJpgToPng()" class="download-btn" style="background: #6c757d;">
                            Convert Another
                        </button>
                    </div>
                `;
                document.getElementById('jpgResult').classList.add('show');
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function resetJpgToPng() {
    document.getElementById('jpgInput').value = '';
    document.getElementById('pngImage').style.display = 'none';
    document.getElementById('pngDownload').innerHTML = '';
    document.getElementById('jpgResult').classList.remove('show');
}

function convertPngToJpg() {
    const input = document.getElementById('pngInput');

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                const jpgDataUrl = canvas.toDataURL('image/jpeg', 0.9);
                const jpgImage = document.getElementById('jpgImage');
                jpgImage.src = jpgDataUrl;
                jpgImage.style.display = 'block';

                document.getElementById('jpgDownload').innerHTML = `
                    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
                        <a href="${jpgDataUrl}" download="converted.jpg" class="download-btn">
                            Download JPG
                        </a>
                        <button onclick="resetPngToJpg()" class="download-btn" style="background: #6c757d;">
                            Convert Another
                        </button>
                    </div>
                `;
                document.getElementById('pngResult').classList.add('show');
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function resetPngToJpg() {
    document.getElementById('pngInput').value = '';
    document.getElementById('jpgImage').style.display = 'none';
    document.getElementById('jpgDownload').innerHTML = '';
    document.getElementById('pngResult').classList.remove('show');
}

function generateQR() {
    const text = document.getElementById('qrText').value;
    if (text) {
        // Using a simple QR code API
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
        document.getElementById('qrOutput').innerHTML = `
            <img src="${qrUrl}" alt="QR Code" style="border: 1px solid #ddd; border-radius: 5px;">
        `;
        document.getElementById('qrDownload').innerHTML = `
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px; justify-content: center;">
                <a href="${qrUrl}" download="qrcode.png" class="download-btn" target="_blank">
                    Download QR Code
                </a>
                <button onclick="resetQRGenerator()" class="download-btn" style="background: #6c757d;">
                    Generate Another
                </button>
            </div>
        `;
        document.getElementById('qrResult').classList.add('show');
    }
}

function resetQRGenerator() {
    document.getElementById('qrText').value = '';
    document.getElementById('qrOutput').innerHTML = '';
    document.getElementById('qrDownload').innerHTML = '';
    document.getElementById('qrResult').classList.remove('show');
}

function convertUnit() {
    const value = parseFloat(document.getElementById('unitFrom').value);
    const fromType = document.getElementById('unitFromType').value;
    const toType = document.getElementById('unitToType').value;

    if (!isNaN(value)) {
        // Convert to meters first
        let meters;
        switch(fromType) {
            case 'km': meters = value * 1000; break;
            case 'cm': meters = value / 100; break;
            default: meters = value;
        }

        // Convert from meters to target
        let result;
        switch(toType) {
            case 'km': result = meters / 1000; break;
            case 'cm': result = meters * 100; break;
            default: result = meters;
        }

        document.getElementById('unitOutput').textContent = result.toFixed(4);
        document.getElementById('unitResult').classList.add('show');

        document.getElementById('unitDownload').innerHTML = `
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
                <button onclick="copyUnitResult()" class="download-btn">
                    Copy Result
                </button>
                <button onclick="resetUnitConverter()" class="download-btn" style="background: #6c757d;">
                    Convert Another
                </button>
            </div>
        `;
    }
}

function copyUnitResult() {
    const result = `Result: ${document.getElementById('unitOutput').textContent}`;
    navigator.clipboard.writeText(result).then(() => {
        alert('Result copied to clipboard!');
    });
}

function resetUnitConverter() {
    document.getElementById('unitFrom').value = '';
    document.getElementById('unitOutput').textContent = '';
    document.getElementById('unitDownload').innerHTML = '';
    document.getElementById('unitResult').classList.remove('show');
}

function calculateStudyTime() {
    const chapters = parseInt(document.getElementById('totalChapters').value);
    const days = parseInt(document.getElementById('daysAvailable').value);
    const hoursPerDay = parseInt(document.getElementById('hoursPerDay').value);

    if (!isNaN(chapters) && !isNaN(days) && !isNaN(hoursPerDay)) {
        const chaptersPerDay = Math.ceil(chapters / days);
        const hoursPerChapter = (hoursPerDay / chaptersPerDay).toFixed(1);

        document.getElementById('studyOutput').innerHTML = `
            Chapters per day: ${chaptersPerDay}<br>
            Hours per chapter: ${hoursPerChapter} hours<br>
            Total study hours: ${days * hoursPerDay} hours
        `;
        document.getElementById('studyResult').classList.add('show');

        document.getElementById('studyDownload').innerHTML = `
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
                <button onclick="copyStudyResult()" class="download-btn">
                    Copy Result
                </button>
                <button onclick="resetStudyCalculator()" class="download-btn" style="background: #6c757d;">
                    Calculate Another
                </button>
            </div>
        `;
    }
}

function copyStudyResult() {
    const result = document.getElementById('studyOutput').textContent;
    navigator.clipboard.writeText(result).then(() => {
        alert('Result copied to clipboard!');
    });
}

function resetStudyCalculator() {
    document.getElementById('totalChapters').value = '';
    document.getElementById('daysAvailable').value = '';
    document.getElementById('hoursPerDay').value = '';
    document.getElementById('studyOutput').innerHTML = '';
    document.getElementById('studyDownload').innerHTML = '';
    document.getElementById('studyResult').classList.remove('show');
}

function calculateAttendance() {
    const total = parseInt(document.getElementById('totalClasses').value);
    const attended = parseInt(document.getElementById('attendedClasses').value);

    if (!isNaN(total) && !isNaN(attended) && total > 0) {
        const percentage = (attended / total) * 100;
        document.getElementById('attendanceOutput').textContent = percentage.toFixed(2) + '%';

        let status = '';
        if (percentage >= 75) status = 'Good attendance!';
        else if (percentage >= 60) status = 'Average attendance';
        else status = 'Low attendance - attend more classes!';

        document.getElementById('attendanceStatus').textContent = status;
        document.getElementById('attendanceResult').classList.add('show');

        document.getElementById('attendanceDownload').innerHTML = `
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
                <button onclick="copyAttendanceResult()" class="download-btn">
                    Copy Result
                </button>
                <button onclick="resetAttendanceCalculator()" class="download-btn" style="background: #6c757d;">
                    Calculate Another
                </button>
            </div>
        `;
    }
}

function copyAttendanceResult() {
    const result = `Attendance: ${document.getElementById('attendanceOutput').textContent}\n${document.getElementById('attendanceStatus').textContent}`;
    navigator.clipboard.writeText(result).then(() => {
        alert('Result copied to clipboard!');
    });
}

function resetAttendanceCalculator() {
    document.getElementById('totalClasses').value = '';
    document.getElementById('attendedClasses').value = '';
    document.getElementById('attendanceOutput').textContent = '';
    document.getElementById('attendanceStatus').textContent = '';
    document.getElementById('attendanceDownload').innerHTML = '';
    document.getElementById('attendanceResult').classList.remove('show');
}

function calculateGrade() {
    const s1 = parseFloat(document.getElementById('subject1').value) || 0;
    const s2 = parseFloat(document.getElementById('subject2').value) || 0;
    const s3 = parseFloat(document.getElementById('subject3').value) || 0;
    const s4 = parseFloat(document.getElementById('subject4').value) || 0;
    const s5 = parseFloat(document.getElementById('subject5').value) || 0;

    const total = s1 + s2 + s3 + s4 + s5;
    const percentage = (total / 500) * 100;

    let grade;
    if (percentage >= 90) grade = 'A+';
    else if (percentage >= 80) grade = 'A';
    else if (percentage >= 70) grade = 'B';
    else if (percentage >= 60) grade = 'C';
    else if (percentage >= 50) grade = 'D';
    else grade = 'F';

    document.getElementById('totalMarks').textContent = total;
    document.getElementById('percentageOutput').textContent = percentage.toFixed(2) + '%';
    document.getElementById('gradeOutput').textContent = grade;
    document.getElementById('gradeResult').classList.add('show');

    document.getElementById('gradeDownload').innerHTML = `
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
            <button onclick="copyGradeResult()" class="download-btn">
                Copy Result
            </button>
            <button onclick="resetGradeCalculator()" class="download-btn" style="background: #6c757d;">
                Calculate Another
            </button>
        </div>
    `;
}

function copyGradeResult() {
    const result = `Total: ${document.getElementById('totalMarks').textContent}\nPercentage: ${document.getElementById('percentageOutput').textContent}\nGrade: ${document.getElementById('gradeOutput').textContent}`;
    navigator.clipboard.writeText(result).then(() => {
        alert('Result copied to clipboard!');
    });
}

function resetGradeCalculator() {
    document.getElementById('subject1').value = '';
    document.getElementById('subject2').value = '';
    document.getElementById('subject3').value = '';
    document.getElementById('subject4').value = '';
    document.getElementById('subject5').value = '';
    document.getElementById('totalMarks').textContent = '';
    document.getElementById('percentageOutput').textContent = '';
    document.getElementById('gradeOutput').textContent = '';
    document.getElementById('gradeDownload').innerHTML = '';
    document.getElementById('gradeResult').classList.remove('show');
}

function calculateSpeed() {
    const distance = parseFloat(document.getElementById('distance').value);
    const time = parseFloat(document.getElementById('time').value);

    if (!isNaN(distance) && !isNaN(time) && time > 0) {
        const speed = distance / time;
        document.getElementById('speedOutput').textContent = speed.toFixed(2) + ' km/h';
        document.getElementById('speedResult').classList.add('show');

        document.getElementById('speedDownload').innerHTML = `
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
                <button onclick="copySpeedResult()" class="download-btn">
                    Copy Result
                </button>
                <button onclick="resetSpeedCalculator()" class="download-btn" style="background: #6c757d;">
                    Calculate Another
                </button>
            </div>
        `;
    }
}

function copySpeedResult() {
    const result = `Speed: ${document.getElementById('speedOutput').textContent}`;
    navigator.clipboard.writeText(result).then(() => {
        alert('Result copied to clipboard!');
    });
}

function resetSpeedCalculator() {
    document.getElementById('distance').value = '';
    document.getElementById('time').value = '';
    document.getElementById('speedOutput').textContent = '';
    document.getElementById('speedDownload').innerHTML = '';
    document.getElementById('speedResult').classList.remove('show');
}

// Open Guide
function openGuide(guideId) {
    const modal = document.getElementById('toolModal');
    const toolContent = document.getElementById('toolContent');
    const guide = guides.find(g => g.id === guideId);

    if (guide) {
        toolContent.innerHTML = getGuideContent(guide);
        modal.style.display = 'block';
    }
}

function getGuideContent(guide) {
    const guideContents = {
        'cgpa-to-percentage': `
            <div class="tool-interface">
                <h3>📚 How to Convert CGPA to Percentage?</h3>
                <div class="guide-content">
                    <h4>Simple Formula:</h4>
                    <p><strong>Percentage = CGPA × 9.5</strong></p>
                    
                    <h4>Example:</h4>
                    <p>If your CGPA is 8.5:</p>
                    <p>Percentage = 8.5 × 9.5 = 80.75%</p>
                    
                    <h4>Why 9.5?</h4>
                    <p>The multiplier 9.5 is used by many educational institutions and universities as a standard conversion factor. However, some institutions may use different multipliers, so always check with your specific institution.</p>
                    
                    <h4>Quick Reference:</h4>
                    <ul>
                        <li>CGPA 10.0 = 95%</li>
                        <li>CGPA 9.0 = 85.5%</li>
                        <li>CGPA 8.0 = 76%</li>
                        <li>CGPA 7.0 = 66.5%</li>
                        <li>CGPA 6.0 = 57%</li>
                    </ul>
                </div>
            </div>
        `,
        'reduce-image-size': `
            <div class="tool-interface">
                <h3>📷 How to Reduce Image Size to Target KB?</h3>
                <div class="guide-content">
                    <h4>Using Our Enhanced Image Compressor:</h4>
                    <p>Our Image Compressor tool now allows you to compress images to specific target sizes, perfect for document uploads and form submissions.</p>
                    
                    <h4>Quick Steps:</h4>
                    <ol>
                        <li>Upload your image</li>
                        <li>Select target size style="color: #3a09ebc2;" (20KB, 50KB, 100KB, 200KB, 500KB, or custom)</li>
                        <li>Choose output format (JPEG, PNG, or WebP)</li>
                        <li>Adjust quality if needed</li>
                        <li>Click "Compress Image"</li>
                        <li>Download your compressed image</li>
                    </ol> 
                    
                    <h4>Common Use Cases:</h4>
                    <ul>
                        <li><strong>20KB:</strong> Passport photos, small profile pictures</li>
                        <li><strong>50KB:</strong> Document uploads, form submissions</li>
                        <li><strong>100KB:</strong> Web images, email attachments</li>
                        <li><strong>200KB:</strong> Social media posts, blog images</li>
                        <li><strong>500KB:</strong> High-quality web images</li>
                    </ul>
                    
                    <h4>Format Recommendations:</h4>
                    <ul>
                        <li><strong>JPEG:</strong> Best for photographs, smallest file size</li>
                        <li><strong>PNG:</strong> Best for graphics with transparency</li>
                        <li><strong>WebP:</strong> Modern format, excellent compression</li>
                    </ul>
                    
                    <h4>Pro Tips:</h4>
                    <ul>
                        <li>The tool automatically adjusts quality and dimensions to reach target size</li>
                        <li>For best results, start with higher quality images</li>
                        <li>WebP format offers the best compression for most use cases</li>
                        <li>Custom size allows exact KB requirements for specific forms</li>
                    </ul>
                </div>
            </div>
        `,
        'calculate-bmi': `
            <div class="tool-interface">
                <h3>⚖️ How to Calculate BMI Correctly?</h3>
                <div class="guide-content">
                    <h4>BMI Formula:</h4>
                    <p><strong>BMI = Weight (kg) / Height² (m)</strong></p>
                    
                    <h4>BMI Categories:</h4>
                    <ul>
                        <li>Underweight: BMI < 18.5</li>
                        <li>Normal weight: 18.5 ≤ BMI < 25</li>
                        <li>Overweight: 25 ≤ BMI < 30</li>
                        <li>Obese: BMI ≥ 30</li>
                    </ul>
                    
                    <h4>Example Calculation:</h4>
                    <p>Weight: 70 kg, Height: 175 cm (1.75 m)</p>
                    <p>BMI = 70 / (1.75 × 1.75) = 22.86 (Normal weight)</p>
                    
                    <h4>Important Notes:</h4>
                    <ul>
                        <li>BMI is a general indicator and doesn't account for muscle mass</li>
                        <li>Athletes may have higher BMI due to muscle mass</li>
                        <li>Consult a healthcare provider for personalized advice</li>
                    </ul>
                </div>
            </div>
        `,
        'gst-calculation': `
            <div class="tool-interface">
                <h3>🧾 How to Calculate GST?</h3>
                <div class="guide-content">
                    <h4>GST Formula:</h4>
                    <p><strong>GST Amount = (Original Amount × GST Rate) / 100</strong></p>
                    <p><strong>Total Amount = Original Amount + GST Amount</strong></p>
                    
                    <h4>GST Rates in India:</h4>
                    <ul>
                        <li>5% - Essential items</li>
                        <li>12% - Standard items</li>
                        <li>18% - Most goods and services</li>
                        <li>28% - Luxury items</li>
                    </ul>
                    
                    <h4>Example:</h4>
                    <p>Amount: ₹1000, GST Rate: 18%</p>
                    <p>GST = (1000 × 18) / 100 = ₹180</p>
                    <p>Total = 1000 + 180 = ₹1180</p>
                    
                    <h4>Reverse Calculation:</h4>
                    <p>To find original amount from total:</p>
                    <p>Original = Total / (1 + GST Rate/100)</p>
                </div>
            </div>
        `,
        'age-calculation': `
            <div class="tool-interface">
                <h3>🎂 How to Calculate Exact Age?</h3>
                <div class="guide-content">
                    <h4>Manual Calculation:</h4>
                    <p>1. Subtract birth year from current year = years</p>
                    <p>2. Subtract birth month from current month = months</p>
                    <p>3. Subtract birth day from current day = days</p>
                    
                    <h4>Example:</h4>
                    <p>Birth Date: 15 January 2000</p>
                    <p>Current Date: 8 September 2024</p>
                    <p>Years: 2024 - 2000 = 24</p>
                    <p>Months: 9 - 1 = 8</p>
                    <p>Days: 8 - 15 = -7 (borrow from months)</p>
                    <p>Final: 24 years, 7 months, 23 days</p>
                    
                    <h4>Leap Years:</h4>
                    <p>Don't forget to account for leap years when calculating exact days!</p>
                </div>
            </div>
        `,
        'word-count-tips': `
            <div class="tool-interface">
                <h3>📝 Tips for Accurate Word Count</h3>
                <div class="guide-content">
                    <h4>What Counts as a Word?</h4>
                    <ul>
                        <li>Any group of characters separated by spaces</li>
                        <li>Numbers count as words</li>
                        <li>Hyphenated words: some count as one, some as two</li>
                    </ul>
                    
                    <h4>What Doesn't Count:</h4>
                    <ul>
                        <li>Punctuation marks alone</li>
                        <li>Extra spaces</li>
                        <li>Line breaks</li>
                    </ul>
                    
                    <h4>Word Count Guidelines:</h4>
                    <ul>
                        <li>Blog posts: 500-2,000 words</li>
                        <li>Essays: 1,000-5,000 words</li>
                        <li>Reports: 2,000-10,000 words</li>
                    </ul>
                    
                    <h4>Tools:</h4>
                    <p>Use our Word Counter tool above for accurate counting of both words and characters.</p>
                </div>
            </div>
        `
    };

    return guideContents[guideId] || `<div class="tool-interface"><h3>${guide.title}</h3><p>Guide content coming soon...</p></div>`;
}