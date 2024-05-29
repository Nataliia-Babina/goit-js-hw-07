const categoriesAll = document.querySelector('#categories');

const categoriesItem = categoriesAll.querySelectorAll('.item');

console.log(`Number og categories: ${categoriesItem.length}`);

categoriesItem.forEach(item => {
    const categoriesTitle = item.querySelector('h2').textContent;
    const categoriesElements = item.querySelectorAll('ul>li').length;
    
    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${categoriesElements}`);
})