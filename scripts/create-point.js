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
      cities.forEach(city => citySelect.innerHTML += `<option value='${city.id}'>${city.nome}</option>`);

      citySelect.disabled = false;
    })
};

const clearCitySelected = (citySelect) => {
  citySelect.innerHTML = '<option>Selecione a Cidade</option>';
  citySelect.disabled = true;
};

document
  .querySelector('select[name=uf]')
  .addEventListener('change', getCities);
