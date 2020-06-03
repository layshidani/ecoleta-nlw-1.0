const populateUFs = (() => {
  const ufSelect = document.querySelector('select[name=uf]');

  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(res => res.json())
    .then(states => {
      states.forEach(state => ufSelect.innerHTML += `<option value='${state.id}'>${state.nome}</option>`);
    })
})();

const getCities = (event) => {
  const citySelect = document.querySelector('[name=city]');
  const stateInput = document.querySelector('[name=state]');

  const ufValue = event.target.value;

  const indexOfSelectedState = event.target.selectedIndex;
  stateInput.value = event.target.options[indexOfSelectedState].text;

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

  clearCitySelected(citySelect);

  fetch(url)
    .then(res => res.json())
    .then(cities => {
      cities.forEach(city => citySelect.innerHTML += `<option value='${city.nome}'>${city.nome}</option>`);

      citySelect.disabled = false;
    })
};

const clearCitySelected = (citySelect) => {
  citySelect.innerHTML = '<option value>Selecione a Cidade</option>';
  citySelect.disabled = true;
};

document
  .querySelector('select[name=uf]')
  .addEventListener('change', getCities);

const itemsToCollect = document.querySelectorAll('.items-grid li');

for (let item of itemsToCollect) {
  item.addEventListener('click', handleSelectedItem);
}

const collectedItems = document.querySelector("input[name=items]");
let selectedItems = [];

function handleSelectedItem() {
  const itemLi = event.target;
  itemLi.classList.toggle('selected');
  const itemId = itemLi.dataset.id;
  const alredySelected = selectedItems.findIndex(item => item === itemId);

  if (alredySelected >= 0) {
    const filterItems = selectedItems.filter(item => {
      const itemIsDifferent = item !== itemId;
      return itemIsDifferent;
    })

    selectedItems = filterItems;

  } else {
    selectedItems.push(itemId);
  }

  collectedItems.value = selectedItems;
}
