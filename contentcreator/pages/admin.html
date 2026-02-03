<?php
session_start();

// Check if user is logged in
if (!isset($_SESSION['user_logged_in']) || $_SESSION['user_logged_in'] !== true) {
    header('Location: index.php?page=login');
    exit();
}

// Logout action
if (isset($_GET['action']) && $_GET['action'] === 'logout') {
    // Log logout activity
    $log_file = 'login_log.txt';
    $log_entry = date('Y-m-d H:i:s') . " | User: {$_SESSION['username']} | Action: Logout | Session: " . session_id() . "\n";
    file_put_contents($log_file, $log_entry, FILE_APPEND);
    
    // Destroy session
    session_destroy();
    
    // Redirect to login with success message
    header('Location: index.php?page=login&logout=success');
    exit();
}

// Admin data
$admin_stats = [
    'total_visitors' => 1245,
    'total_orders' => 89,
    'total_gallery' => 42,
    'total_users' => 3
];

// Recent activities
$recent_activities = [
    ['time' => '10:30', 'user' => 'admin', 'action' => 'Login ke sistem'],
    ['time' => '09:15', 'user' => 'gilang', 'action' => 'Upload gambar ke galeri'],
    ['time' => '08:45', 'user' => 'fahmi', 'action' => 'Update data produk'],
    ['time' => 'Yesterday', 'user' => 'admin', 'action' => 'Backup database']
];
?>

<div class="admin-container">
    <!-- Admin Header -->
    <div class="admin-header">
        <div class="admin-welcome">
            <h2><i class="fas fa-user-shield"></i> Admin Dashboard</h2>
            <p class="welcome-message">
                Selamat datang, <strong><?php echo $_SESSION['nama']; ?></strong>! 
                (Role: <span class="role-badge <?php echo $_SESSION['role']; ?>"><?php echo $_SESSION['role']; ?></span>)
            </p>
        </div>
        <div class="admin-actions">
            <button class="btn-admin" onclick="window.location.href='index.php?page=home'">
                <i class="fas fa-home"></i> Website
            </button>
            <button class="btn-admin btn-logout" onclick="window.location.href='index.php?page=admin&action=logout'">
                <i class="fas fa-sign-out-alt"></i> Logout
            </button>
        </div>
    </div>
    
    <!-- Session Info -->
    <div class="session-info">
        <h4><i class="fas fa-info-circle"></i> Informasi Session:</h4>
        <div class="info-cards">
            <div class="info-card">
                <i class="fas fa-user"></i>
                <div>
                    <strong>Username:</strong> <?php echo $_SESSION['username']; ?>
                </div>
            </div>
            <div class="info-card">
                <i class="fas fa-envelope"></i>
                <div>
                    <strong>Email:</strong> <?php echo $_SESSION['email']; ?>
                </div>
            </div>
            <div class="info-card">
                <i class="fas fa-sign-in-alt"></i>
                <div>
                    <strong>Login Time:</strong> <?php echo $_SESSION['login_time']; ?>
                </div>
            </div>
            <div class="info-card">
                <i class="fas fa-network-wired"></i>
                <div>
                    <strong>IP Address:</strong> <?php echo $_SESSION['ip_address']; ?>
                </div>
            </div>
            <div class="info-card">
                <i class="fas fa-id-card"></i>
                <div>
                    <strong>Session ID:</strong> <?php echo session_id(); ?>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Statistics -->
    <div class="stats-section">
        <h3><i class="fas fa-chart-bar"></i> Dashboard Statistics</h3>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon" style="background: #3498db;">
                    <i class="fas fa-users"></i>
                </div>
                <div class="stat-content">
                    <div class="stat-number"><?php echo $admin_stats['total_visitors']; ?></div>
                    <div class="stat-label">Total Pengunjung</div>
                </div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon" style="background: #2ecc71;">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <div class="stat-content">
                    <div class="stat-number"><?php echo $admin_stats['total_orders']; ?></div>
                    <div class="stat-label">Total Pesanan</div>
                </div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon" style="background: #9b59b6;">
                    <i class="fas fa-images"></i>
                </div>
                <div class="stat-content">
                    <div class="stat-number"><?php echo $admin_stats['total_gallery']; ?></div>
                    <div class="stat-label">Item Galeri</div>
                </div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon" style="background: #e74c3c;">
                    <i class="fas fa-user-friends"></i>
                </div>
                <div class="stat-content">
                    <div class="stat-number"><?php echo $admin_stats['total_users']; ?></div>
                    <div class="stat-label">Total User</div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Admin Features -->
    <div class="admin-features-section">
        <h3><i class="fas fa-cogs"></i> Admin Features</h3>
        <div class="features-grid">
            <!-- CRUD Products -->
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-box-open"></i>
                </div>
                <div class="feature-content">
                    <h4>Kelola Produk/Jasa</h4>
                    <p>Tambah, edit, hapus data produk</p>
                    <div class="feature-actions">
                        <button class="btn-feature" onclick="manageProducts()">
                            <i class="fas fa-edit"></i> Kelola
                        </button>
                        <button class="btn-feature btn-add" onclick="addProduct()">
                            <i class="fas fa-plus"></i> Tambah
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Manage Gallery -->
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-images"></i>
                </div>
                <div class="feature-content">
                    <h4>Kelola Galeri</h4>
                    <p>Upload dan kelola gambar/video</p>
                    <div class="feature-actions">
                        <button class="btn-feature" onclick="manageGallery()">
                            <i class="fas fa-edit"></i> Kelola
                        </button>
                        <button class="btn-feature btn-add" onclick="uploadGallery()">
                            <i class="fas fa-upload"></i> Upload
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- User Management -->
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-users-cog"></i>
                </div>
                <div class="feature-content">
                    <h4>Manajemen User</h4>
                    <p>Kelola pengguna dan hak akses</p>
                    <div class="feature-actions">
                        <button class="btn-feature" onclick="manageUsers()">
                            <i class="fas fa-user-edit"></i> Kelola
                        </button>
                        <button class="btn-feature btn-add" onclick="addUser()">
                            <i class="fas fa-user-plus"></i> Tambah
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Database Backup -->
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-database"></i>
                </div>
                <div class="feature-content">
                    <h4>Database</h4>
                    <p>Backup dan restore database</p>
                    <div class="feature-actions">
                        <button class="btn-feature" onclick="backupDatabase()">
                            <i class="fas fa-download"></i> Backup
                        </button>
                        <button class="btn-feature btn-restore" onclick="restoreDatabase()">
                            <i class="fas fa-upload"></i> Restore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Recent Activities -->
    <div class="activities-section">
        <h3><i class="fas fa-history"></i> Recent Activities</h3>
        <div class="activities-list">
            <?php foreach ($recent_activities as $activity): ?>
            <div class="activity-item">
                <div class="activity-time">
                    <i class="fas fa-clock"></i> <?php echo $activity['time']; ?>
                </div>
                <div class="activity-user">
                    <i class="fas fa-user"></i> <?php echo $activity['user']; ?>
                </div>
                <div class="activity-action">
                    <?php echo $activity['action']; ?>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
    
    <!-- Quick Settings -->
    <div class="settings-section">
        <h3><i class="fas fa-sliders-h"></i> Quick Settings</h3>
        <div class="settings-grid">
            <div class="setting-item">
                <label class="switch">
                    <input type="checkbox" checked>
                    <span class="slider"></span>
                </label>
                <span>Maintenance Mode</span>
            </div>
            <div class="setting-item">
                <label class="switch">
                    <input type="checkbox" checked>
                    <span class="slider"></span>
                </label>
                <span>Email Notifications</span>
            </div>
            <div class="setting-item">
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider"></span>
                </label>
                <span>Dark Mode</span>
            </div>
            <div class="setting-item">
                <label class="switch">
                    <input type="checkbox" checked>
                    <span class="slider"></span>
                </label>
                <span>Auto Backup</span>
            </div>
        </div>
    </div>
</div>

<style>
/* Admin Container */
.admin-container {
    padding: 20px;
}

/* Admin Header */
.admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(135deg, #2c3e50, #34495e);
    color: white;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.admin-welcome h2 {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;
}

.welcome-message {
    margin: 10px 0 0 0;
    opacity: 0.9;
}

.admin-actions {
    display: flex;
    gap: 10px;
}

.btn-admin {
    padding: 10px 20px;
    background: rgba(255,255,255,0.2);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background 0.3s ease;
}

.btn-admin:hover {
    background: rgba(255,255,255,0.3);
}

.btn-logout {
    background: #e74c3c;
}

.btn-logout:hover {
    background: #c0392b;
}

/* Session Info */
.session-info {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    margin-bottom: 20px;
}

.session-info h4 {
    margin-bottom: 15px;
    color: #2c3e50;
}

.info-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
}

.info-card {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #3498db;
}

.info-card i {
    font-size: 1.5rem;
    color: #3498db;
}

/* Statistics */
.stats-section {
    margin: 30px 0;
}

.stats-section h3 {
    color: #2c3e50;
    margin-bottom: 20px;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.stat-card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-5px);
}

.stat-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
}

.stat-content {
    flex: 1;
}

.stat-number {
    font-size: 2rem;
    font-weight: bold;
    color: #2c3e50;
}

.stat-label {
    color: #7f8c8d;
    font-size: 0.9rem;
}

/* Admin Features */
.admin-features-section {
    margin: 30px 0;
}

.admin-features-section h3 {
    color: #2c3e50;
    margin-bottom: 20px;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.feature-card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.feature-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #3498db, #2980