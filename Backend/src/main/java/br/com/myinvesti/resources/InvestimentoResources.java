package br.com.myinvesti.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.myinvesti.repository.InvestimentoRepository;

import br.com.myinvesti.domain.Investimento;

@RestController
@RequestMapping("/investimentos")
public class InvestimentoResources {
	
	@Autowired
	private  InvestimentoRepository investimentoRepository;
	
	@GetMapping
	public List<Investimento>listarTodos(){
		return investimentoRepository.findAll();
	}
	
	@GetMapping("/{codigo}")
	public Investimento buscaPeloCodigo(@PathVariable Long codigo) {
		return investimentoRepository.findById(codigo).orElse(null);
		
	}
	
	@DeleteMapping
	public void remover(@PathVariable Long codigo) {
		investimentoRepository.deleteById(codigo);
	}
	
	@PutMapping
	public Investimento cadastrar(@RequestBody Investimento investimento) {
		return investimentoRepository.save(investimento);
	}
	
	

}
