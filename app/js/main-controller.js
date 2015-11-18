'use strict';

angular.module('Proto').controller('MainCtrl', function ($scope, $state) {
    
    // Données pour les écrans
    
    $scope.listeAnneesNaissance = [];
    for(var i = 1945; i < 2015; i++) {
        $scope.listeAnneesNaissance.push(i);
    }
    
    $scope.listeAnneesDepart = [];
    for(var i = 0; i < 10; i++) {
        $scope.listeAnneesDepart.push(2015+i);
    }
    
    $scope.listeMois = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
    
    // Opérations pour changer d'écran 
    
    $scope.nextStep = function() {
        var currentStep = $state.current;
        $state.go('step'+(currentStep.step+1));
    };
    
    $scope.prevStep = function() {
        var currentStep = $state.current;
        $state.go('step'+(currentStep.step-1));
        return false;
    };
    
    // Données fictives pour le proto
    
    $scope.caisses = [
        {
            nom: "MSA",
            description: "Exploitants et salariés agricoles"
        },{
            nom: "CNAV",
            description: "Régime général",
            details: [
                "Salariés de l'industrie, du commerce et des services",
                "Agents non titulaires de l'Etat et des collectivités publiques",
                "Artistes et auteurs d'oeuvres originales"
            ]
        },{
            nom: "Je ne sais pas"
        }
    ];
    
    $scope.checkList = [
        {
            titre: "Je reconstitue ma carrière",
            delai: "Dès aujourd'hui",
            infos: "Avez-vous déjà vérifié que les données de votre relevé de situation individuelle sont exactes et complètes ? Si oui, passez à l’étape suivante. Sinon, suivez les étapes ci-dessous",
            actions: [
                "Je crée mon espace privé sur le site Internet de ma caisse MSA pour avoir accès aux services en ligne personnalisés <a href='http://www.msa.fr/lfr/espace-prive' target='_blank'>ICI</a>.",
                "Dans mon espace privé « Mon compte », je choisis « Internet » comme préférence de mode de réception des documents et des informations de mon dossier personnel.",
                "Dans mon espace privé, je consulte mon relevé de situation individuelle.",
                "Je vérifie que les données de mon relevé de situation individuelle sont exactes et complètes.",
                "Si j’identifie des périodes manquantes ou informations erronées, je demande une régularisation de ma carrière en envoyant par courrier ou en déposant à mon agence les pièces justificatives correspondantes."
            ],
            precisions: [
                "Je peux à tout moment adresser mes questions par mail à mon conseiller depuis mon espace privé."
            ]
        },{
            titre: "Je contacte mon / mes régime(s) complémentaire(s)",
            delai: "Dès que possible",
            infos: "Nous avons détecté que vous dépendez pour votre retraite complémentaire de [XXX] . Vous devez effectuer une demande distincte auprès de ce régime.",
            actions: [
                "Je prends contact avec mon/mes régimes de retraite complémentaire ICI afficher les coordonnées des régimes concernés telles qu’extraites de l’annuaire retraite.",
                "Je note ci-dessous les démarches à effectuer pour obtenir ma retraite complémentaire."
            ]
        },{
            titre: "Je contacte mes autres régimes (hors régimes alignés)",
            delai: "Dès que possible",
            infos: "Nous avons détecté que vous dépendez également du régime…... Vous devez effectuer une demande distincte auprès de ce régime.",
            actions: [
                "Je prends contact avec mon/mes autres régimes de retraite ICI afficher les coordonnées des régimes concernés telles qu’extraites de l’annuaire retraite."
            ]
        },{
            titre: "Je notifie ma date de départ à mon employeur ou à Pôle emploi",
            delai: "Avril à juin 2017"
        },{
            titre: "Je récupère mon dossier",
            delai: "Avant avril 2017",
            actions: [
                "Je prends connaissance de mon dossier de demande unique de retraite personnelle en ligne, accessible dans mon espace privé. Ajouter le lien + nom de la rubrique"
            ]
        },{
            titre: "Je constitue mon dossier",
            actions: [
                "Je prends connaissance des pièces justificatives à envoyer.",
                "Je remplis mon dossier de demande unique de retraite personnelle en ligne, accessible dans mon espace privé."
            ],
            precisions: [
                "Si je rencontre des difficultés, je peux contacter XXX (agence ? plate-forme ?) pour obtenir de l’aide /// ou // Si je rencontre des difficultés, je peux opter pour le dossier papier (téléchargement/retrait en agence ou téléphone)"
            ]
        },{
            titre: "Je dépose mon dossier",
            delai: "Avant juin 2017",
            infos: "",
            actions: [
                "Ma MSA me contacte (peut-on ici indiquer un délai maximum ou indicatif ?) pour me demander les pièces justificatives à envoyer et je les dépose en agence ou je les envoie par courrier.",
                "Je reçois par courrier, dans un délai d’1 mois maximum, un accusé de réception. Je conserve ces documents."
            ]
        },{
            titre: "Je suis l’avancée de mon dossier",
            actions: [
                "Ma MSA ou un autre régime peut me contacter pour me demander des pièces complémentaires. Le courrier précisera les modalités de transmission de ces pièces."
            ],
            precisions: [
                "L’instruction moyenne du dossier dure environ 2 mois. Passé ce délai, je peux prendre contact avec la MSA pour connaitre l’avancée de mon dossier."
            ]
        },{
            titre: "J’obtiens ma retraite",
            delai: "",
            infos: "",
            actions: [
                "Je reçois par courrier ma notification de paiement.",
                "Je reçois mon premier versement.",
                "Je peux suivre mes versements dans mon espace personnel."
            ],
            precisions: [
                "Attention : ce montant n’inclut pas votre retraite complémentaire ni les droits que vous avez acquis auprès de [autres régimes détectés].",
                "Veuillez noter que la date de versement indiquée dans votre notification de paiement correspond à la date de l’opération bancaire. Les délais de traitement de votre banque peuvent occasionner un décalage d’une à deux journées ouvrées.",
                "En tant que retraité, je peux bénéficier de nouveaux services. Veuillez consulter la page Internet « XXXXX ». Ajouter le lien"
            ]
        }
    ];
    
});

