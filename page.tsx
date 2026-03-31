{selectedApp && (
  <div className={styles.modal}>
    <div className={styles.modalContent}>
      <button
        className={styles.closeBtn}
        onClick={() => {
          setSelectedApp(null);
          setReason('');
        }}
      >
        ✕
      </button>

      <h2>Application Details</h2>

      <div className={styles.details}>
        {/* ... existing details ... */}
      </div>

      {selectedApp.status === 'pending' && (
        <div className={styles.actions}>
          {/* ... existing approval/rejection ... */}
        </div>
      )}

      {/* Download ZIP Button */}
      <button
        className={styles.downloadBtn}
        onClick={async () => {
          try {
            const r = await fetch(
              `/api/admin/applications/${selectedApp.id}/download-zip`,
              {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
                },
              }
            );
            if (r.ok) {
              const blob = await r.blob();
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `application-${selectedApp.id}.zip`;
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(url);
              document.body.removeChild(a);
            }
          } catch (err) {
            console.error('Download failed', err);
          }
        }}
      >
        ⬇️ Download as ZIP
      </button>
    </div>
  </div>
)}