<?php
session_start();

// Redirect jika sudah login
if (isset($_SESSION['user_logged_in']) && $_SESSION['user_logged_in'] === true) {
    header('Location: index.php?page=admin');
    exit();
}

// Initialize error/success messages
$error_message = '';
$success_message = '';

// Process login form
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');
    
    // Validation
    if (empty($username) || empty($password)) {
        $error_message = 'Username dan password harus diisi!';
    } else {
        // Check user credentials
        $user_found = false;
        foreach ($valid_users as $user) {
            if ($user['username'] === $username && $user['password'] === $password) {
                $user_found = true;
                
                // Set session variables
                $_SESSION['user_logged_in'] = true;
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['username'] = $user['username'];
                $_SESSION['nama'] = $user['nama'];
                $_SESSION['email'] = $user['email'];
                $_SESSION['role'] = $user['role'];
                $_SESSION['login_time'] = date('Y-m-d H:i:s');
                $_SESSION['ip_address'] = $_SERVER['REMOTE_ADDR'];
                
                // Log login activity
                $log_file = 'login_log.txt';
                $log_entry = date('Y-m-d H:i:s') . " | User: {$username} | IP: {$_SERVER['REMOTE_ADDR']} | Status: Success\n";
                file_put_contents($log_file, $log_entry, FILE_APPEND);
                
                // Set success message
                $success_message = "Login berhasil! Selamat datang, {$user['nama']}.";
                
                // Redirect to admin page after 2 seconds
                header('Refresh: 2; URL=index.php?page=admin');
                break;
            }
        }
        
        if (!$user_found) {
            $error_message = 'Username atau password salah!';
            
            // Log failed attempt
            $log_file = 'login_log.txt';
            $log_entry = date('Y-m-d H:i:s') . " | User: {$username} | IP: {$_SERVER['REMOTE_ADDR']} | Status: Failed\n";
            file_put_contents($log_file, $log_entry, FILE_APPEND);
        }
    }
}

// Logout action
if (isset($_GET['action']) && $_GET['action'] === 'logout') {
    session_destroy();
    $success_message = 'Anda telah logout.';
    header('Refresh: 2; URL=index.php?page=login');
}

// Check if coming from logout
if (isset($_GET['logout']) && $_GET['logout'] === 'success') {
    $success_message = 'Anda telah logout dari sistem.';
}
?>

<div class="login-container">
    <h2 class="login-title"><i class="fas fa-lock"></i> Login Admin ContentHub</h2>
    
    <?php if ($error_message): ?>
    <div class="alert alert-error">
        <i class="fas fa-exclamation-circle"></i> <?php echo $error_message; ?>
    </div>
    <?php endif; ?>
    
    <?php if ($success_message): ?>
    <div class="alert alert-success">
        <i class="fas fa-check-circle"></i> <?php echo $success_message; ?>
        <?php if (isset($_SESSION['user_logged_in'])): ?>
        <p>Mengarahkan ke dashboard admin...</p>
        <?php endif; ?>
    </div>
    <?php endif; ?>
    
    <div class="login-box">
        <form method="POST" action="" id="loginForm">
            <div class="form-group">
                <label for="username"><i class="fas fa-user"></i> Username</label>
                <input type="text" 
                       id="username" 
                       name="username" 
                       value="<?php echo isset($_POST['username']) ? htmlspecialchars($_POST['username']) : ''; ?>" 
                       placeholder="Masukkan username" 
                       required
                       autofocus>
            </div>
            
            <div class="form-group">
                <label for="password"><i class="fas fa-key"></i> Password</label>
                <div class="password-container">
                    <input type="password" 
                           id="password" 
                           name="password" 
                           placeholder="Masukkan password" 
                           required>
                    <button type="button" class="toggle-password" onclick="togglePassword()">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            
            <div class="form-group form-options">
                <label class="checkbox-label">
                    <input type="checkbox" name="remember" id="remember">
                    <span>Ingat saya</span>
                </label>
                <a href="#" class="forgot-password" onclick="showForgotPassword()">
                    <i class="fas fa-question-circle"></i> Lupa password?
                </a>
            </div>
            
            <div class="form-group">
                <button type="submit" class="btn-login">
                    <i class="fas fa-sign-in-alt"></i> Login
                </button>
            </div>
        </form>
        
        <div class="demo-accounts">
            <h4><i class="fas fa-user-secret"></i> Demo Accounts:</h4>
            <div class="account-list">
                <?php foreach ($valid_users as $user): ?>
                <div class="account-item">
                    <strong>User:</strong> <code><?php echo $user['username']; ?></code>
                    <strong>Pass:</strong> <code><?php echo $user['password']; ?></code>
                    <span class="role-badge <?php echo $user['role']; ?>"><?php echo $user['role']; ?></span>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
    
    <div class="login-features">
        <h3><i class="fas fa-cogs"></i> Fitur Admin Panel:</h3>
        <div class="features-grid">
            <div class="feature">
                <i class="fas fa-database"></i>
                <h4>Database CRUD</h4>
                <p>Kelola data produk, galeri, dan user</p>
            </div>
            <div class="feature">
                <i class="fas fa-chart-line"></i>
                <h4>Analytics</h4>
                <p>Statistik pengunjung dan performa</p>
            </div>
            <div class="feature">
                <i class="fas fa-file-upload"></i>
                <h4>File Manager</h4>
                <p>Upload dan kelola file media</p>
            </div>
            <div class="feature">
                <i class="fas fa-users-cog"></i>
                <h4>User Management</h4>
                <p>Kelola hak akses pengguna</p>
            </div>
        </div>
    </div>
    
    <div class="login-info">
        <h4><i class="fas fa-info-circle"></i> Informasi Sistem:</h4>
        <div class="info-grid">
            <div class="info-item">
                <i class="fas fa-server"></i>
                <div>
                    <strong>PHP Version:</strong> <?php echo phpversion(); ?>
                </div>
            </div>
            <div class="info-item">
                <i class="fas fa-calendar"></i>
                <div>
                    <strong>Tanggal:</strong> <?php echo date('d F Y'); ?>
                </div>
            </div>
            <div class="info-item">
                <i class="fas fa-clock"></i>
                <div>
                    <strong>Waktu:</strong> <?php echo date('H:i:s'); ?>
                </div>
            </div>
            <div class="info-item">
                <i class="fas fa-network-wired"></i>
                <div>
                    <strong>IP Address:</strong> <?php echo $_SERVER['REMOTE_ADDR']; ?>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Forgot Password Modal -->
<div id="forgotPasswordModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h3><i class="fas fa-key"></i> Reset Password</h3>
            <button class="close-modal" onclick="closeModal()">&times;</button>
        </div>
        <div class="modal-body">
            <p>Masukkan email yang terdaftar untuk reset password:</p>
            <div class="form-group">
                <input type="email" id="resetEmail" placeholder="email@example.com">
            </div>
            <button class="btn-reset" onclick="sendResetLink()">
                <i class="fas fa-paper-plane"></i> Kirim Link Reset
            </button>
        </div>
    </div>
</div>

<style>
/* Login Container */
.login-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
}

.login-title {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
    border-bottom: 3px solid #3498db;
    padding-bottom: 15px;
}

/* Alerts */
.alert {
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.alert-error {
    background: #ffeaea;
    border: 1px solid #ff6b6b;
    color: #d63031;
}

.alert-success {
    background: #e8f6ef;
    border: 1px solid #2ecc71;
    color: #27ae60;
}

/* Login Box */
.login-box {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    margin-bottom: 30px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #2c3e50;
    display: flex;
    align-items: center;
    gap: 8px;
}

.form-group input {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.3s ease;
}

.form-group input:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

/* Password Container */
.password-container {
    position: relative;
}

.toggle-password {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #7f8c8d;
    cursor: pointer;
    font-size: 18px;
}

/* Form Options */
.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.checkbox-label input {
    width: auto;
    margin: 0;
}

.forgot-password {
    color: #3498db;
    text-decoration: none;
    font-size: 14px;
}

.forgot-password:hover {
    text-decoration: underline;
}

/* Login Button */
.btn-login {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #3498db, #2980b9);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s ease;
}

.btn-login:hover {
    background: linear-gradient(135deg, #2980b9, #1c6ea4);
    transform: translateY(-2px);
}

/* Demo Accounts */
.demo-accounts {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    border-left: 4px solid #3498db;
}

.demo-accounts h4 {
    margin-bottom: 15px;
    color: #2c3e50;
}

.account-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.account-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px;
    background: white;
    border-radius: 5px;
}

.account-item code {
    background: #ecf0f1;
    padding: 3px 8px;
    border-radius: 3px;
    font-family: monospace;
}

.role-badge {
    padding: 3px 10px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
}

.role-badge.admin {
    background: #e74c3c;
    color: white;
}

.role-badge.user {
    background: #2ecc71;
    color: white;
}

.role-badge.dosen {
    background: #9b59b6;
    color: white;
}

/* Login Features */
.login-features {
    margin: 30px 0;
    padding: 30px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 15px;
}

.login-features h3 {
    text-align: center;
    margin-bottom: 30px;
    color: #2c3e50;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
}

.feature {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    transition: transform 0.3s ease;
}

.feature:hover {
    transform: translateY(-5px);
}

.feature i {
    font-size: 2.5rem;
    color: #3498db;
    margin-bottom: 15px;
}

.feature h4 {
    margin: 10px 0;
    color: #2c3e50;
}

.feature p {
    color: #7f8c8d;
    font-size: 14px;
    margin: 0;
}

/* Login Info */
.login-info {
    padding: 20px;
    background: #2c3e50;
    color: white;
    border-radius: 15px;
}

.login-info h4 {
    text-align: center;
    margin-bottom: 20px;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px;
    background: rgba(255,255,255,0.1);
    border-radius: 8px;
}

.info-item i {
    font-size: 1.5rem;
    color: #3498db;
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    z-index: 1000;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    width: 90%;
    max-width: 500px;
    border-radius: 15px;
    overflow: hidden;
    animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

.modal-header {
    background: #3498db;
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h3 {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;
}

.close-modal {
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
}

.modal-body {
    padding: 30px;
}

.btn-reset {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #2ecc71, #27ae60);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}

.btn-reset:hover {
    background: linear-gradient(135deg, #27ae60, #219653);
}

/* Responsive */
@media (max-width: 768px) {
    .login-container {
        padding: 20px;
    }
    
    .login-box {
        padding: 20px;
    }
    
    .form-options {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .info-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<script>
// Toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.querySelector('.toggle-password i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.className = 'fas fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        toggleButton.className = 'fas fa-eye';
    }
}

// Show forgot password modal
function showForgotPassword() {
    document.getElementById('forgotPasswordModal').style.display = 'flex';
}

// Close modal
function closeModal() {
    document.getElementById('forgotPasswordModal').style.display = 'none';
}

// Send reset link
function sendResetLink() {
    const email = document.getElementById('resetEmail').value;
    
    if (!email) {
        alert('Silakan masukkan email terlebih dahulu.');
        return;
    }
    
    // Simulate sending reset link
    alert(`Link reset password telah dikirim ke: ${email}\n\n(Cek email Anda untuk instruksi selanjutnya)`);
    closeModal();
}

// Auto focus on username if there's error
document.addEventListener('DOMContentLoaded', function() {
    const errorAlert = document.querySelector('.alert-error');
    if (errorAlert) {
        document.getElementById('username').focus();
    }
    
    // Log page view
    console.log('Login page loaded - PHP Session:', '<?php echo session_id(); ?>');
});
</script>