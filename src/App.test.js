import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Todo list', () => {
    it('Check that button is initialily disabled  if inputs are empty', () => {
      render(<App/>);

      //recupérer la liste des inputs
      const inputs = screen.getAllByRole('textbox');

      //vérifier que le BOUTON EST DÉSACTIVÉ quand AU MOINS un champs de texte est vide
      expect(screen.getByRole('button')).toBeDisabled();

      // Ecrire dans l'un des champs
      userEvent.type(inputs[0],'hello react');

      // ré-verifier que le BOUTON EST DÉSACTIVÉ tant que tous les champs ne sont pas remplis
      expect(screen.getByRole('button')).toBeDisabled();

      // remplir le champs de texte restant
      userEvent.type(inputs[1], 'react hello');
  
      // vérifier que le BOUTON EST MAINTENANT ACTIVÉ, après que tous les champs de text aient été remplit
      expect(screen.getByRole('button')).toBeEnabled();
    })

    it('Check that button get disabled if at least one of the inputs get empty', () => {
      render(<App/>);

      // récuperer les champs de text      
      const inputs = screen.getAllByRole('textbox');

      // remplir tous les champs de text 
      userEvent.type(inputs[0],'Good mornig');
      userEvent.type(inputs[1],'Good evening');

      // vérifier que le bouton est activé
      expect(screen.getByRole('button')).toBeEnabled();
      
      // vider le contenu d'un des champs de text
      userEvent.clear(inputs[0]);

      // tester que le bouton est désactivé
      expect(screen.getByRole('button')).toBeDisabled();

      // vider l'autre champs de texte
      userEvent.clear(inputs[1]);

      // re-vérifier que le boutton est jour désactivé
      expect(screen.getByRole('button')).toBeDisabled();
    })
})
