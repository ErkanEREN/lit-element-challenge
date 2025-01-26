const translations = {
    en: {
      employee_list:'Employee List',
      search_employees:'Search Employees...',
      edit_employee:'Edit Employee',
      add_employee:'Add New Employee',
      add_new:'Add New',
      first_name:'First Name',
      last_name:'Last Name',
      employment_date:'Date of Employment',
      birth_date:'Date of Birth',
      phone:'Phone Number',
      email:'E-Mail Address',
      department:'Department',
      analytics:'Analytics',
      tech:'Tech',
      position:'Position',
      junior:'Junior',
      medior:'Medior',
      senior:'Senior',
      save:'Save',
      cancel:'Cancel',
      actions:'Actions',
      delete_confirm:'Are you sure you want to delete this employee?',
      edit:'Edit',
      delete:'Delete',
      view_list: 'List View',
      view_grid: 'Grid View',
    },
    tr: {
      employee_list: 'Çalışan Listesi',
      search_employees: 'Çalışanları ara...',
      add_new: 'Yeni Ekle',
      first_name: 'Ad',
      last_name: 'Soyad',
      position: 'Pozisyon',
      actions: 'İşlemler',
      edit: 'Düzenle',
      delete: 'Sil',
      delete_confirm: 'Bu çalışanı silmek istediğinizden emin misiniz?',
    },
  };

  /**
   * @function
   * @param {String} key - locale to be used
   * @returns {String}
   */
  export function localize(key) {
    return translations[(document.documentElement && document.documentElement.lang) || 'en'][key] || key;

  }
  