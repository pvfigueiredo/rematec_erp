import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Adicionar um tratamento de erros para ajudar na depuração
platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log('Angular application successfully bootstrapped!'))
  .catch(err => {
    console.error('Error during Angular bootstrap:', err);
    // Exibe uma mensagem de erro mais visível na página
    const errorDiv = document.createElement('div');
    errorDiv.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: #fff; color: #ff3333; padding: 20px; overflow: auto; z-index: 9999;">
        <h2>Erro ao inicializar o Angular:</h2>
        <pre style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; overflow: auto;">${err.toString()}</pre>
        <p>Verifique o console do navegador para mais detalhes.</p>
      </div>
    `;
    document.body.appendChild(errorDiv);
  });
