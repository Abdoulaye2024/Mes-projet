export default function Realisation() {
  return (
    <div className="page-container">
      <div className="container py-5 mt-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-4 mb-4">Nos Réalisations</h1>
            
            <p className="lead mb-4">
              ArchivPro a accompagné de nombreuses entreprises sénégalaises dans leurs projets d'archivage, de numérisation et de gestion documentaire.
            </p>

            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Projets Majeurs</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Archivage d'entreprise - 50,000 documents</strong>
                    <p className="text-muted small mt-2">Classement, conditionnement et archivage sécurisé de documents historiques d'une grande société sénégalaise.</p>
                  </li>
                  <li className="list-group-item">
                    <strong>Numérisation administrative - 100,000 pages</strong>
                    <p className="text-muted small mt-2">Numérisation de dossiers administratifs avec indexation complète et mise en place d'une GED.</p>
                  </li>
                  <li className="list-group-item">
                    <strong>GED Ministérielle</strong>
                    <p className="text-muted small mt-2">Implémentation d'une solution GED complète pour la gestion des archives ministérielles.</p>
                  </li>
                  <li className="list-group-item">
                    <strong>Audit documentaire - Secteur Bancaire</strong>
                    <p className="text-muted small mt-2">Audit complet de la gestion documentaire et recommandations de conformité bancaire.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-3">Secteurs d'Activité Couverts</h5>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2">✓ Secteur Bancaire et Financier</li>
                      <li className="mb-2">✓ Administrations Publiques</li>
                      <li className="mb-2">✓ Secteur Médical</li>
                      <li className="mb-2">✓ Entreprises Industrielles</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2">✓ Secteur Logistique</li>
                      <li className="mb-2">✓ Cabinets d'Avocats</li>
                      <li className="mb-2">✓ Notaires</li>
                      <li className="mb-2">✓ Collectivités Territoriales</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 text-center">
              <p className="text-muted">Découvrez comment ArchivPro peut transformer votre gestion documentaire</p>
              <a href="/contact" className="btn btn-warning btn-lg">
                Demander un Devis
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
