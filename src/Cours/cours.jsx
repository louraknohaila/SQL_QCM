import { Link } from "react-router-dom";
import "./cours.css";

export default function Cours() {
      
   return(
    <div className="Cours" >
        <Link to="/QCM" className="nav-link">
           👉🏻 QCM 👈🏻
          </Link>

        <h3 className="titre1">Introduction à SQL et PL/SQL</h3>
       <h4 className="intro">
       Introduction à SQL :
       </h4>
       <p className="def">
       <span className="sql">SQL (Structured Query Language): </span> 
       est un langage de programmation pour gérer les bases de données. <br/>
       Il permet d'effectuer des opérations comme l'insertion, la mise à jour, la suppression et la récupération de données. <br/>
       SQL est largement utilisé dans le développement d'applications et la gestion de l'information. <br/>
       Les commandes SQL sont structurées et permettent d'interagir efficacement avec les bases de données relationnelles.
       </p>
       <div className="div1">
          <h4 className="select"> 1 / Sélection de données avec SELECT :</h4>
           <p className="selectX">Exemple : Sélectionner tous les ombres de la table "Utilisateurs".</p>
             <p className="requete">SELECT * FROM Utilisateurs;</p>
         </div>
            <div className="div2">
            <h4 className="where"> 2 / Filtrage de données avec WHERE : </h4>
               <p className="wheres">Exemple : Sélectionner les utilisateurs de l'âge est supérieur à 25.</p>
                     <p className="requete">SELECT * FROM Utilisateurs WHERE age > 25;</p>
            </div>
             <div className="div3">
               <h4 className="insert"> 3 / Insertion de données avec INSERT INTO :</h4>
                  <p className="inserts">Exemple : Ajouter un nouvel utilisateur à la table.</p>
                     <p className="requete">INSERT INTO Utilisateurs (nom, prenom, age) VALUES ('Doe', 'John', 30);</p>
             </div>
                <div className="div4">
                  <h4 className="update"> 4 / Mise à jour de données avec MISE À JOUR :</h4>
                     <p className="updates">Exemple : Mettre à jour l'âge de l'utilisateur un nom est 'Smith'.</p>
                       <p className="updateE">UPDATE Utilisateurs SET age = 28 WHERE nom = 'Smith';</p>
                </div>
                <div className="div5">
                  <h4 className="insert"> 5 / Suppression de données avec DELETE :</h4>
                     <p className="inserts">Exemple : Supprimer tous les utilisateurs de l'âge est inférieur à 21.</p>
                       <p className="requete">DELETE FROM Utilisateurs WHERE age 21;</p>
                </div>
                <div className="div6">
                  <h4 className="insert"> 6 / Jointures :</h4>
                     <p className="inserts">Les jointures permettent de combiner des données de deux tables en fonction d'une condition spécifiée.</p>
                       <p className="requete">SELECT Utilisateurs.nom, Commandes.date
                         FROM Utilisateurs
                     INNER JOIN Commandes ON Utilisateurs.id = Commandes.id_utilisateur;
                    </p>
                </div>
                <div className="div7">
                  <h4 className="insert"> 7 / Fonctions d'agrégation :</h4>
                     <p className="inserts">Les fonctions d'agrégation effectuent des calculs sur un ensemble de valeurs.</p>
                       <p className="requete">
                        SELECT AVG(salaire) AS moyenne_salaire
                          FROM Employes
                          WHERE service = 'Ventes';
                              </p>
                </div>
                <div className="div8">
                  <h4 className="insert"> 8 / Indexation :</h4>
                     <p className="inserts">Les index sont utilisés pour accélérer la recherche de données dans une table.</p>
                       <p className="requete">CREATE INDEX idx_nom ON Utilisateurs(nom);</p>
                </div>
                <div className="div8">
                  <h4 className="insert"> 9 / Opérations :</h4>
                     <p className="inserts">Les transactions garantissent l'intégrité des données en assurant que toutes les opérations sont exécutées avec succès ou annulées.</p>
                       <p className="requete">BEGIN TRANSACTION;
                                      -- Effectuer des opérations SQL
                                  COMMIT; -- Valider la transaction
                                    </p>
                </div>
                <div className="div8">
                  <h4 className="insert"> 10 / DROP (Supprimer) :</h4>
                     <p className="inserts">Définition : Utilisé pour supprimer une table ou une base de données.</p>
                       <p className="requete">DROP TABLE Employes;</p>
                </div>
                <div className="div8">
                  <h4 className="insert"> 11 / Vues (constatations) :</h4>
                     <p className="inserts">Exemple : Création d'une vue pour afficher les employés de plus de 30 ans.</p>
                       <p className="requete">CREATE VIEW employes_30_ans_plus AS<br/>
SELECT * FROM Employes WHERE age > 30;<br/>
</p>
                </div>
                <div className="div8">
                  <h4 className="insert"> 12 / Vue Matérialisée :</h4>
                     <p className="inserts">Une vue matérialisée est une table virtuelle qui stocke les résultats <br/>
                                 d'une requête pour une consultation plus rapide</p>
                       <p className="requete">-- Vue Matérialisée pour le total des ventes par produit<br/>
                               CREATE MATERIALIZED VIEW mv_total_ventes AS SELECT produit, SUM(quantite * prix_unitaire)<br/>
                                as total_vente FROM ventes GROUP BY produit;<br/>
                                -- Interroger la vue matérialisée<br/>
                                     SELECT * FROM mv_total_ventes;</p>
                </div>
                <div className="div8">
                  <h4 className="insert"> 13 / Séquence:</h4>
                     <p className="inserts">Une séquence est une liste de nombres générés automatiquement, souvent utilisée pour créer des identifiants<br/> 
                     uniques dans une base de données.</p>
                       <p className="requete">CREATE SEQUENCE seq_utilisateur <br/>
                                              START WITH 1 INCREMENT BY 1 <br/>
                                              NOCACHE NOCYCLE; 
                             </p>
                </div>
                <h4 className="intros">
                               Introduction à PL/SQL :
                  </h4>
                <p className="defin">     
                <b>PL/SQL : </b> est un langage de programmation procédural, ce qui signifie qu'il permet aux programmeurs de créer des procédures,<br/>
                 des fonctions, et d'autres blocs de code structurels pour manipuler les données de la base de données.
                </p>
                <div className="div1">
          <h4 className="select"> 1 / Tableaux (Arrays) :</h4>
           <p className="selectX">PL/SQL pris en charge les tableaux pour stocker des ensembles de données.</p>
             <p className="requete">DECLARE<br/>
                          TYPE tableau_noms IS TABLE OF VARCHAR2(50);<br/>
                          noms tableau_noms := tableau_noms('Alice', 'Bob', 'Charlie');<br/>
                          BEGIN<br/>
                          -- Utiliser le tableau<br/>
                            END;
             </p>
         </div>
            <div className="div2">
            <h4 className="where"> 2 / Collecte en vrac : </h4>
               <p className="wheres">Bulk Collect Perper de récupérer plusieurs lignes en une seule opération, 
                                    les performances de l'écorémenc.
               </p>
                     <p className="requete">DECLARE<br/>
                          TYPE tableau_noms IS TABLE OF Utilisateurs.nom%TYPE;<br/>
                             noms tableau_noms;<br/>
                                         BEGIN<br/>
                          SELECT nom BULK COLLECT INTO noms FROM Utilisateurs WHERE age > 30;<br/>
                           -- Utiliser le tableau<br/>
                               END;
                </p>
            </div>
             <div className="div3">
               <h4 className="insert"> 3 / Pragmas :</h4>
                  <p className="inserts">Les pragmas sont des instructions spéciales pour le compilateur PL/SQL</p>
                     <p className="requete"> PRAGMA AUTONOMOUS_TRANSACTION;
                            --  Permet d'exécuter une transaction indépendante
                           </p>
             </div>
                <div className="div4">
                  <h4 className="update"> 4 / Types de composites de données:</h4>
                     <p className="updates">PL/SQL pris en charge les types de données composites comme les enregistrements et les tableaux.</p>
                       <p className="requete">TYPE enregistrement_utilisateur IS RECORD (nom VARCHAR2(50), age NUMBER);
                                    utilisateur enregistrement_utilisateur;
                             </p>
                </div>
                <div className="div5">
                  <h4 className="insert"> 5 / SQL dynamique : :</h4>
                     <p className="inserts">L'utilisation de l'exécution dynamique de requêtes SQL.</p>
                       <p className="requete">DECLARE
                               requete VARCHAR2(200);<br/>
                                     BEGIN<br/>
                               requete := 'SELECT * FROM Utilisateurs WHERE age > 25';<br/>
                                    EXECUTE IMMEDIATE requete;<br/>
END;</p>
                </div>
                <div className="div6">
                  <h4 className="insert"> 6 / Création d'une procédure stockée :</h4>
                     <p className="inserts">Exemple : Procédure PL/SQL qui rencontre à jour l'âge d'un utilisateur..</p>
                       <p className="requete">
                        CREATE OR REPLACE PROCEDURE UpdateAge(p_nom VARCHAR2, p_nouvel_age NUMBER) AS<br/>
                         BEGIN<br/>
                         UPDATE Utilisateurs SET age = p_nouvel_age WHERE nom = p_nom;<br/>
                         END;<br/>
                         /
                    </p>
                </div>
                <div className="div7">
                  <h4 className="insert"> 7 / Création d'une fonction :</h4>
                     <p className="inserts">Exemple : Fonction PL/SQL qui calcule la somme de deux nombres.</p>
                       <p className="requete">
                       CREATE OR REPLACE FUNCTION AddNumbers(p_num1 NUMBER, p_num2 NUMBER) RETURN NUMBER AS<br/>
                       total NUMBER;<br/>
                         BEGIN<br/>
                            total := p_num1 + p_num2;<br/>
                               RETURN total;<br/>
                                    END;<br/>
                                   /
                              </p>
                </div>
                <div className="div8">
                  <h4 className="insert"> 8 / Création de déclencheurs (déclencheurs):</h4>
                     <p className="inserts">Exemple : Déclencheur PL/SQL qui se prox't après l'insertion dans la table "Commandes".</p>
                       <p className="requete">CREATE OR REPLACE TRIGGER AfterInsertCommande<br/>
                                AFTER INSERT ON Commandes<br/>
                                FOR EACH ROW<br/>
                                BEGIN<br/>
                                  -- Code à exécuter après chaque insertion dans la table "Commandes".<br/>
                                  DBMS_OUTPUT.PUT_LINE('Nouvelle commande insérée.');<br/>
                                END<br/>;
                                  /
</p>
                </div>
                <div className="div8">
                  <h4 className="insert"> 9 / Gestion des exceptions :</h4>
                     <p className="inserts">La gestion des exceptions permis de traiter les erreurs de retard.</p>
                       <p className="requete">BEGIN<br/>
                                   -- Code PL/SQL<br/>
                                   EXCEPTION<br/>
                                     WHEN NO_DATA_FOUND THEN<br/>
                                       DBMS_OUTPUT.PUT_LINE('Aucune donnée trouvée.');<br/>
                                     WHEN OTHERS THEN<br/>
                                       DBMS_OUTPUT.PUT_LINE('Erreur inattendue.');<br/>
                                   END;<br/>
                                   /
                                    </p>
                </div>
                <div className="div8">
                  <h4 className="insert"> 10 / Curseurs :</h4>
                     <p className="inserts">Les curseurs sont utilisés pour traiter un ensemble de lignes de retournés par une requête.</p>
                       <p className="requete">DECLARE<br/>
                                 CURSOR c_utilisateurs IS SELECT nom FROM Utilisateurs;<br/>
                                 v_nom Utilisateurs.nom%TYPE;<br/>
                                 BEGIN<br/>
                                 OPEN c_utilisateurs;<br/>
                                 LOOP<br/>
                                   FETCH c_utilisateurs INTO v_nom;<br/>
                                   EXIT WHEN c_utilisateurs%NOTFOUND;<br/>
                                   DBMS_OUTPUT.PUT_LINE('Nom : ' || v_nom);<br/>
                                 END LOOP;<br/>
                                 CLOSE c_utilisateurs;<br/>
                                 END;<br/>
</p>
                </div>
                <div className="div8">
                  <h4 className="insert"> 11 / Paquets :</h4>
                     <p className="inserts">Les packages regroupe des objets PL/SQL sete pour une meilleure organisation du code.</p>
                       <p className="requete">CREATE OR REPLACE PACKAGE MonPackage AS<br/>
                                               PROCEDURE MaProcedure;<br/>
                                                 END MonPackage;<br/>
                                                      /
</p>
                </div>
              <div className="difference">
                    <h3 className="rq">SQL vs PL/SQL</h3>
                    <p className="requetes">
                    🛢SQL est axé sur la manipulation des données, tandis que PL/SQL offre des capacités procédurales <br/>
                   pour développer des applications plus avancées directement à l'intérieur de la base de données🛢.<br/>
                    </p>
              </div>
                 <h5 className="footer"> 🤍 Bon courage 🤍</h5>

    </div>
   )

}