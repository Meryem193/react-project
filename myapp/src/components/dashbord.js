import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashbord.css';
import {
  Users,
  BarChart3,
  BookOpen,
  Settings,
  LogOut,
  Bell,
  X,
  CheckCircle,
  AlertCircle,
  Info,
  XCircle,
  UserCheck,
  UserX,
  Clock,
  UserPlus
} from 'lucide-react';

// Composant de notification
const Notification = ({ notification, onClose }) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'success': return <CheckCircle size={20} />;
      case 'error': return <XCircle size={20} />;
      case 'warning': return <AlertCircle size={20} />;
      default: return <Info size={20} />;
    }
  };

  return (
    <div className={`notification notification-${notification.type}`}>
      <div className="notification-icon">
        {getIcon()}
      </div>
      <div className="notification-content">
        <div className="notification-title">{notification.title}</div>
        <div className="notification-message">{notification.message}</div>
      </div>
      <button className="notification-close" onClick={() => onClose(notification.id)}>
        <X size={16} />
      </button>
    </div>
  );
};

// Conteneur des notifications
const NotificationContainer = ({ notifications, onClose }) => (
  <div className="notification-container">
    {notifications.map(notification => (
      <Notification
        key={notification.id}
        notification={notification}
        onClose={onClose}
      />
    ))}
  </div>
);

// Boîte de message modale
const MessageBox = ({ isOpen, onClose, type, title, message, onConfirm }) => {
  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case 'success': return <CheckCircle size={24} className="text-success" />;
      case 'error': return <XCircle size={24} className="text-error" />;
      case 'warning': return <AlertCircle size={24} className="text-warning" />;
      default: return <Info size={24} className="text-info" />;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="message-box">
        <div className="message-box-header">
          <div className="message-box-icon">
            {getIcon()}
          </div>
          <h3>{title}</h3>
        </div>
        <div className="message-box-content">
          <p>{message}</p>
        </div>
        <div className="message-box-actions">
          {onConfirm && (
            <button className="btn btn-primary" onClick={onConfirm}>
              Confirmer
            </button>
          )}
          <button className="btn btn-secondary" onClick={onClose}>
            {onConfirm ? 'Annuler' : 'Fermer'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Carte statistique - modifiée pour enlever les nombres
const StatCard = ({ title, icon: Icon, color }) => (
  <div className={`stat-card stat-card-${color}`}>
    <div className="stat-card-content">
      <div className="stat-card-header">
        <div className="stat-card-icon">
          <Icon size={24} />
        </div>
      </div>
      <div className="stat-card-body">
        <p>{title}</p>
      </div>
    </div>
  </div>
);

// Composant Header avec notifications
const Header = ({ title, notifications, onNotificationClick }) => (
  <header className="header">
    <h1>{title}</h1>
    <div className="header-actions">
      <button className="notification-bell" onClick={onNotificationClick}>
        <Bell size={20} />
        {notifications.length > 0 && (
          <span className="notification-badge">{notifications.length}</span>
        )}
      </button>
    </div>
  </header>
);

// Page Tableau de bord améliorée
const DashboardHome = ({ showNotification, showMessageBox }) => {
  const [filter, setFilter] = useState('');
  
  // Données statistiques - suppression des valeurs et trends
  const stats = [
    { title: 'Total Inscrits', icon: Users, color: 'blue' },
    { title: 'En Attente', icon: Clock, color: 'orange' },
    { title: 'Approuvées', icon: UserCheck, color: 'green' },
    { title: 'Rejetées', icon: UserX, color: 'red' }
  ];

  // Données du tableau - suppression de la colonne status
  const data = [
    { id: 1, nom: "Nouvelles inscriptions", valeur: "45" },
    { id: 2, nom: "Documents en révision", valeur: "23" },
    { id: 3, nom: "Inscriptions complétées", valeur: "156" },
    { id: 4, nom: "Inscriptions annulées", valeur: "12" },
  ];

  const filteredData = data.filter(item =>
    item.nom.toLowerCase().includes(filter.toLowerCase()) ||
    item.valeur.toLowerCase().includes(filter.toLowerCase())
  );

  const handleStatCardClick = (statTitle) => {
    showNotification({
      type: 'info',
      title: 'Statistique consultée',
      message: `Vous avez consulté les données de: ${statTitle}`
    });
  };

  const handleRowAction = (item) => {
    showMessageBox({
      type: 'info',
      title: 'Action sur l\'élément',
      message: `Voulez-vous effectuer une action sur "${item.nom}" ?`,
      onConfirm: () => {
        showNotification({
          type: 'success',
          title: 'Action effectuée',
          message: `Action réalisée avec succès sur "${item.nom}"`
        });
      }
    });
  };

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Bienvenue sur le tableau de bord</h2>
        <p>Voici un aperçu général de l'administration FSAC.</p>
      </div>

      {/* Cartes statistiques */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} onClick={() => handleStatCardClick(stat.title)}>
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      {/* Section tableau */}
      <div className="content-section">
        <div className="section-header">
          <h3>Activités récentes</h3>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => showNotification({
              type: 'info',
              title: 'Actualisation',
              message: 'Les données ont été actualisées'
            })}
          >
            Actualiser
          </button>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Filtrer les activités..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="table-container">
          <table className="simple-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Activité</th>
                <th>Valeur</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nom}</td>
                    <td><span className="value-badge">{item.valeur}</span></td>
                    <td>
                      <button 
                        className="btn btn-sm btn-outline"
                        onClick={() => handleRowAction(item)}
                      >
                        Voir détails
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="4">Aucune activité trouvée.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Page Programmes améliorée
const ProgramPage = ({ showNotification, showMessageBox }) => {
  const [filter, setFilter] = useState('');
  const programs = [
    { id: 1, nom: "Informatique", description: "Programme informatique", etudiants: 145, status: "active" },
    { id: 2, nom: "Mathématiques", description: "Programme mathématique", etudiants: 89, status: "active" },
    { id: 3, nom: "Physique", description: "Programme de physique", etudiants: 67, status: "inactive" },
    { id: 4, nom: "Chimie", description: "Programme chimie", etudiants: 123, status: "active" },
  ];

  const filteredPrograms = programs.filter(prog =>
    prog.nom.toLowerCase().includes(filter.toLowerCase()) ||
    prog.description.toLowerCase().includes(filter.toLowerCase())
  );

  const handleProgramAction = (program, action) => {
    showMessageBox({
      type: 'warning',
      title: `${action} le programme`,
      message: `Êtes-vous sûr de vouloir ${action.toLowerCase()} le programme "${program.nom}" ?`,
      onConfirm: () => {
        showNotification({
          type: 'success',
          title: 'Programme modifié',
          message: `Le programme "${program.nom}" a été ${action.toLowerCase()} avec succès`
        });
      }
    });
  };

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Gestion des programmes</h2>
        <button 
          className="btn btn-primary"
          onClick={() => showNotification({
            type: 'info',
            title: 'Nouveau programme',
            message: 'Fonctionnalité d\'ajout de programme à venir'
          })}
        >
          <UserPlus size={16} />
          Ajouter un programme
        </button>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Filtrer les programmes..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="table-container">
        <table className="simple-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Description</th>
              <th>Étudiants</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map(prog => (
                <tr key={prog.id}>
                  <td>{prog.id}</td>
                  <td>{prog.nom}</td>
                  <td>{prog.description}</td>
                  <td><span className="value-badge">{prog.etudiants}</span></td>
                  <td>
                    <span className={`status-badge status-${prog.status === 'active' ? 'success' : 'error'}`}>
                      {prog.status === 'active' ? 'Actif' : 'Inactif'}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="btn btn-sm btn-outline"
                        onClick={() => handleProgramAction(prog, 'Modifier')}
                      >
                        Modifier
                      </button>
                      <button 
                        className="btn btn-sm btn-danger"
                        onClick={() => handleProgramAction(prog, 'Supprimer')}
                      >
                        Supprimer
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="6">Aucun programme trouvé.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Page Paramètres améliorée
const SettingsPage = ({ showNotification, showMessageBox }) => {
  const handleSaveSetting = (setting) => {
    showMessageBox({
      type: 'info',
      title: 'Sauvegarder les paramètres',
      message: `Voulez-vous sauvegarder les modifications de "${setting}" ?`,
      onConfirm: () => {
        showNotification({
          type: 'success',
          title: 'Paramètres sauvegardés',
          message: `Les paramètres "${setting}" ont été sauvegardés avec succès`
        });
      }
    });
  };

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Paramètres</h2>
      </div>
      
      <div className="settings-grid">
        <div className="setting-card">
          <h4>Notifications</h4>
          <p>Configurer les notifications de l'application</p>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => handleSaveSetting('Notifications')}
          >
            Configurer
          </button>
        </div>
        
        <div className="setting-card">
          <h4>Sécurité</h4>
          <p>Paramètres de sécurité et authentification</p>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => handleSaveSetting('Sécurité')}
          >
            Configurer
          </button>
        </div>
        
        <div className="setting-card">
          <h4>Système</h4>
          <p>Configuration générale du système</p>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => handleSaveSetting('Système')}
          >
            Configurer
          </button>
        </div>
      </div>
    </div>
  );
};

// Sidebar avec navigation modifiée pour route Inscriptions
const Sidebar = ({ currentPage, setCurrentPage }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: BarChart3 },
    { id: 'inscriptions', label: 'Inscriptions', icon: Users, isRoute: true },
    { id: 'programs', label: 'Programmes', icon: BookOpen },
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ];

  const handleMenuClick = (item) => {
    if (item.isRoute && item.id === 'inscriptions') {
      // Navigation vers la route Inscriptions
      navigate('/inscriptions');
    } else {
      // Navigation locale dans le dashboard
      setCurrentPage(item.id);
    }
  };

  return (
    <aside className="sidebar open">
      <div className="sidebar-header">
        <h2>FSAC Admin</h2>
      </div>
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={currentPage === item.id ? 'active' : ''}
            onClick={() => handleMenuClick(item)}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="logout">
        <button onClick={() => navigate('/login')}>
          <LogOut />
          <span>Déconnexion</span>
        </button>
      </div>
    </aside>
  );
};

// Composant principal Dashboard
const Dashboard = () => {
  const [page, setPage] = useState('dashboard');
  const [notifications, setNotifications] = useState([]);
  const [messageBox, setMessageBox] = useState({ isOpen: false });

  // Fonction pour ajouter une notification
  const showNotification = ({ type, title, message }) => {
    const id = Date.now();
    const newNotification = { id, type, title, message };
    setNotifications(prev => [...prev, newNotification]);
    
    // Auto-suppression après 5 secondes
    setTimeout(() => {
      removeNotification(id);
    }, 5000);
  };

  // Fonction pour supprimer une notification
  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  // Fonction pour afficher une boîte de message
  const showMessageBox = ({ type, title, message, onConfirm }) => {
    setMessageBox({
      isOpen: true,
      type,
      title,
      message,
      onConfirm: onConfirm ? () => {
        onConfirm();
        setMessageBox({ isOpen: false });
      } : null
    });
  };

  // Fonction pour fermer la boîte de message
  const closeMessageBox = () => {
    setMessageBox({ isOpen: false });
  };

  const handleNotificationClick = () => {
    if (notifications.length > 0) {
      showNotification({
        type: 'info',
        title: 'Centre de notifications',
        message: `Vous avez ${notifications.length} notification(s)`
      });
    } else {
      showNotification({
        type: 'info',
        title: 'Aucune notification',
        message: 'Vous n\'avez aucune nouvelle notification'
      });
    }
  };

  const getTitle = () => {
    switch (page) {
      case 'dashboard':
        return 'Tableau de bord';
      case 'programs':
        return 'Programmes';
      case 'settings':
        return 'Paramètres';
      default:
        return '';
    }
  };

  // Notification de bienvenue au montage
  useEffect(() => {
    showNotification({
      type: 'success',
      title: 'Bienvenue !',
      message: 'Vous êtes connecté au tableau de bord FSAC'
    });
  }, []);

  return (
    <div className="dashboard-wrapper">
      <Sidebar
        currentPage={page}
        setCurrentPage={setPage}
      />
      <main className="main-content">
        <Header 
          title={getTitle()} 
          notifications={notifications}
          onNotificationClick={handleNotificationClick}
        />
        {page === 'dashboard' && (
          <DashboardHome 
            showNotification={showNotification}
            showMessageBox={showMessageBox}
          />
        )}
        {page === 'programs' && (
          <ProgramPage 
            showNotification={showNotification}
            showMessageBox={showMessageBox}
          />
        )}
        {page === 'settings' && (
          <SettingsPage 
            showNotification={showNotification}
            showMessageBox={showMessageBox}
          />
        )}
      </main>
      
      {/* Conteneur des notifications */}
      <NotificationContainer 
        notifications={notifications}
        onClose={removeNotification}
      />
      
      {/* Boîte de message modale */}
      <MessageBox
        isOpen={messageBox.isOpen}
        onClose={closeMessageBox}
        type={messageBox.type}
        title={messageBox.title}
        message={messageBox.message}
        onConfirm={messageBox.onConfirm}
      />
    </div>
  );
};

export default Dashboard;
