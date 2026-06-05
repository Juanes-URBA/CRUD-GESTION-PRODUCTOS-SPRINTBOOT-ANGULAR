package com.juanes.ws.service;
import com.juanes.ws.model.Producto;
import com.juanes.ws.repository.ProductoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductoService {

    private final ProductoRepository repository;
    public ProductoService(ProductoRepository repository) {
        this.repository = repository;
    }
    public List<Producto> listar() {
        return repository.findAll();
    }
    public Producto obtener(Long id) {
        return repository.findById(id).orElse(null);
    }
    public Producto guardar(Producto producto) {

        if (producto.getNombre() == null ||
                producto.getNombre().trim().isEmpty()) {
            throw new RuntimeException("El nombre es obligatorio");
        }

        if (producto.getPrecio() < 0) {
            throw new RuntimeException("El precio no puede ser negativo");
        }

        if (producto.getCantidad() < 0) {
            throw new RuntimeException("La cantidad no puede ser negativa");
        }

        if (repository.existsByCodigo(producto.getCodigo())) {
            throw new RuntimeException("El código ya existe");
        }

        return repository.save(producto);
    }
    public Producto actualizar(Long id, Producto producto) {
        Producto existente = obtener(id);
        if (existente == null) {
            return null;
        }
        existente.setCodigo(producto.getCodigo());
        existente.setNombre(producto.getNombre());
        existente.setDescripcion(producto.getDescripcion());
        existente.setPrecio(producto.getPrecio());
        existente.setCantidad(producto.getCantidad());
        existente.setEstado(producto.getEstado());
        return repository.save(existente);
    }

    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}