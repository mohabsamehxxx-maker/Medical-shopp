export const products = {
    'pain-relief': [
        {
            id: 'pr-001',
            name: 'Paracetamol',
            description: '500mg tablets for fever and pain relief',
            price: 3.99,
            emoji: '💊'
        },
        {
            id: 'pr-002',
            name: 'Ibuprofen',
            description: '200mg anti-inflammatory pain relief',
            price: 4.99,
            emoji: '💊'
        },
        {
            id: 'pr-003',
            name: 'Diclofenac',
            description: '50mg potent pain and inflammation relief',
            price: 5.99,
            emoji: '💊'
        },
        {
            id: 'pr-004',
            name: 'Aspirin',
            description: '75mg cardiovascular and pain relief',
            price: 2.99,
            emoji: '💊'
        }
    ],
    'antibiotics': [
        {
            id: 'ab-001',
            name: 'Amoxicillin',
            description: '500mg broad-spectrum antibiotic',
            price: 8.99,
            emoji: '🦠'
        },
        {
            id: 'ab-002',
            name: 'Azithromycin',
            description: '250mg for bacterial infections',
            price: 9.99,
            emoji: '🦠'
        },
        {
            id: 'ab-003',
            name: 'Ciprofloxacin',
            description: '500mg fluoroquinolone antibiotic',
            price: 10.99,
            emoji: '🦠'
        },
        {
            id: 'ab-004',
            name: 'Metronidazole',
            description: '400mg for parasitic infections',
            price: 6.99,
            emoji: '🦠'
        }
    ],
    'cold-flu': [
        {
            id: 'cf-001',
            name: 'Panadol Cold & Flu',
            description: 'Multi-symptom cold relief',
            price: 5.99,
            emoji: '🤧'
        },
        {
            id: 'cf-002',
            name: 'Congestal',
            description: 'Decongestant nasal spray',
            price: 4.99,
            emoji: '🤧'
        },
        {
            id: 'cf-003',
            name: 'Strepsils',
            description: 'Sore throat lozenges',
            price: 3.99,
            emoji: '🤧'
        },
        {
            id: 'cf-004',
            name: 'Otrivin',
            description: 'Nasal decongestant spray',
            price: 4.49,
            emoji: '🤧'
        }
    ],
    'vitamins': [
        {
            id: 'vit-001',
            name: 'Vitamin C',
            description: '1000mg immune system boost',
            price: 4.99,
            emoji: '🥗'
        },
        {
            id: 'vit-002',
            name: 'Vitamin D3',
            description: '2000IU bone health supplement',
            price: 6.99,
            emoji: '🥗'
        },
        {
            id: 'vit-003',
            name: 'Multivitamin',
            description: 'Daily nutritional supplement',
            price: 7.99,
            emoji: '🥗'
        },
        {
            id: 'vit-004',
            name: 'Vitamin B Complex',
            description: 'B vitamins for energy',
            price: 5.99,
            emoji: '🥗'
        }
    ],
    'diabetes': [
        {
            id: 'dia-001',
            name: 'Metformin',
            description: '500mg type 2 diabetes medication',
            price: 12.99,
            emoji: '🩺'
        },
        {
            id: 'dia-002',
            name: 'Glipizide',
            description: '5mg blood sugar control',
            price: 14.99,
            emoji: '🩺'
        },
        {
            id: 'dia-003',
            name: 'Insulin Lancets',
            description: 'Box of 100 lancets for testing',
            price: 8.99,
            emoji: '🩺'
        },
        {
            id: 'dia-004',
            name: 'Diabetic Test Strips',
            description: 'Pack of 50 glucose test strips',
            price: 15.99,
            emoji: '🩺'
        }
    ],
    'blood-pressure': [
        {
            id: 'bp-001',
            name: 'Lisinopril',
            description: '10mg ACE inhibitor for hypertension',
            price: 9.99,
            emoji: '❤️'
        },
        {
            id: 'bp-002',
            name: 'Amlodipine',
            description: '5mg calcium channel blocker',
            price: 11.99,
            emoji: '❤️'
        },
        {
            id: 'bp-003',
            name: 'Atenolol',
            description: '50mg beta-blocker',
            price: 10.99,
            emoji: '❤️'
        },
        {
            id: 'bp-004',
            name: 'Digital BP Monitor',
            description: 'Automatic blood pressure monitor',
            price: 24.99,
            emoji: '❤️'
        }
    ],
    'first-aid': [
        {
            id: 'fa-001',
            name: 'Sterile Bandages',
            description: 'Pack of 100 sterile plasters',
            price: 5.99,
            emoji: '🩹'
        },
        {
            id: 'fa-002',
            name: 'Antiseptic Wipes',
            description: 'Box of 100 alcohol wipes',
            price: 4.99,
            emoji: '🩹'
        },
        {
            id: 'fa-003',
            name: 'Antibiotic Ointment',
            description: '10g triple antibiotic cream',
            price: 3.99,
            emoji: '🩹'
        },
        {
            id: 'fa-004',
            name: 'Elastic Bandage',
            description: '2 inch compression wrap',
            price: 6.99,
            emoji: '🩹'
        }
    ],
    'devices': [
        {
            id: 'dev-001',
            name: 'Thermometer',
            description: 'Digital oral thermometer',
            price: 8.99,
            emoji: '⚙️'
        },
        {
            id: 'dev-002',
            name: 'Stethoscope',
            description: 'Professional dual-head stethoscope',
            price: 19.99,
            emoji: '⚙️'
        },
        {
            id: 'dev-003',
            name: 'Pulse Oximeter',
            description: 'SpO2 and heart rate monitor',
            price: 22.99,
            emoji: '⚙️'
        },
        {
            id: 'dev-004',
            name: 'Heating Pad',
            description: 'Electric therapeutic heating pad',
            price: 17.99,
            emoji: '⚙️'
        }
    ]
};

export const categories = {
    'pain-relief': { title: 'Pain Relief', desc: 'Analgesics & Pain Management' },
    'antibiotics': { title: 'Antibiotics', desc: 'Bacterial Infections Treatment' },
    'cold-flu': { title: 'Cold & Flu', desc: 'Respiratory Relief' },
    'vitamins': { title: 'Vitamins', desc: 'Nutritional Support' },
    'diabetes': { title: 'Diabetes Care', desc: 'Blood Sugar Management' },
    'blood-pressure': { title: 'Blood Pressure', desc: 'Cardiovascular Health' },
    'first-aid': { title: 'First Aid', desc: 'Bandages & Supplies' },
    'devices': { title: 'Medical Devices', desc: 'Equipment & Tools' }
};
